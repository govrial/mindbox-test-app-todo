import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

import { AppDispatch, AppState } from "./types";

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export const useAppState = () => {
  return useAppSelector((state: AppState) => state);
}

export const useAppList = () => {
  return useAppSelector((state: AppState) => state.todoList);
}

export const useAppListLength = () => {
  return useAppSelector((state: AppState) => state.todoList.length);
}

export const useAppMode = () => {
  return useAppSelector((state: AppState) => state.mode);
}