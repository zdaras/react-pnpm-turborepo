import axios, { type AxiosError, type AxiosRequestConfig, type AxiosResponse } from 'axios';

export const otpHeader = 'x-as-otp';
export const authToken = 'Authorization';
const baseURL = 'localhost:3000';
const instance = axios.create({ baseURL });

export const setAuthHeader = async (response: any) => {
	instance.defaults.headers.common[authToken] = `Bearer ${response?.access_token}`;
	return Promise.resolve();
};

export const deleteAuthHeader = () => {
	delete instance.defaults.headers.common[authToken];
};

const requestInterceptor = (cfg: AxiosRequestConfig) => {
	if (cfg.data?.otp && !(cfg.data instanceof FormData) && !(cfg.data instanceof URLSearchParams)) {
		const { otp, ...data } = cfg.data;
		cfg.data = data;
		if (![undefined, null].includes(otp) && cfg.headers) cfg.headers[otpHeader] = otp; // transfer 2fa code from params to header
	}

	return cfg as any;
};

const responseSuccessInterceptor = (response: AxiosResponse): AxiosResponse => response;

const responseErrorInterceptor = async (error: AxiosError) => {
	const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };
	const invalidToken = error.response?.status === 401;

	if (invalidToken && !originalRequest._retry) {
		try {
			delete originalRequest.headers?.[authToken];
			// await refreshToken();
			const tok = 'newToken';
			setAuthHeader({ access_token: tok });
			originalRequest._retry = true;
			if (originalRequest.headers) originalRequest.headers[authToken] = `Bearer ${tok}`;

			return await instance(originalRequest);
		} catch (err: any) {
			return Promise.reject(err?.response?.data);
		}
	}

	return Promise.reject(error?.response?.data);
};

instance.interceptors.request.use(requestInterceptor, err => Promise.reject(err));

instance.interceptors.response.use(responseSuccessInterceptor, responseErrorInterceptor);

export const { get, post, put, delete: del } = instance;
