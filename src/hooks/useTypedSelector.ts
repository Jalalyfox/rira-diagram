import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store/store';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

