<!--
 * @Author: Chendapeng
 * @Date: 2021-08-02 19:07:37
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-09-20 16:14:39
 * @Description: response中的promise Ts使用
-->

使用Promise时，对应类型定义很是模糊，在底层库里，Promise是这么定义的
```ts
interface Promise<T> {
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>
}
```
实践中是如何运用的呢？
```ts
// 获取课程类型/个人类型直播详情
export function getDetail(queryParams: {
  isPersonal: boolean;
  liveId: string;
}): Promise<IResponseRes<ILiveDetailResponse>> {
    return axios.get(
    isPersonal
      ? `/1`
      : `/2`,
    {
      params: _params,
    }
  );
}
``` 
看看*IResponseRes*和*ILiveDetailResponse*如何定义
```ts
export interface IResponseRes<T> {
  data: {
    ret: number;
    msg: string;
    data: T;
  };
  [key: string]: any;
}
export type ILiveDetailResponse = {
  id: string;
  roomId: number;
  recordInfo?: {
    [key: string]: any;
  };
  [key: string]: any;
};
```