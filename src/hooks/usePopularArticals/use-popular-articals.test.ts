import {renderHook, act} from '@testing-library/react';
import  {usePopularArticals} from './use-popular-articals';

test('check default article Page', () => {
    const { result } = renderHook(() => usePopularArticals());
    expect(result.current.articalsSize).toEqual(1);
});

test('check default popular Article', () => {
    const { result } = renderHook(() => usePopularArticals());
    expect(result.current.popularArticals).toEqual([]);
});

test('check set article Size mehthod', () => {
    const { result } = renderHook(() => usePopularArticals());
    act(() => {
        result.current.onGetMostPopularArticals(7);
    });
    expect(result.current.articalsSize).toBe(1);
})

test('get most popular article', () => {
    const { result } = renderHook(() => usePopularArticals());
    act(() => {
        result.current.onGetMostPopularArticals(7);
    });
    expect(result.current.popularArticals).toStrictEqual([]);
    expect(result.current.articalsSize).toBe(1);
})