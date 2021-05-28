/// <reference types="react-scripts" />

import { AxiosResponse } from "axios";

declare function post<T = any, R = AxiosResponse<T>>(
  url: string,
  data?: any
): Promise<R>;
