import { useSelector as _useSelector, TypedUseSelectorHook } from "react-redux";

import { RootState } from "../state";

const useSelector: TypedUseSelectorHook<RootState> = _useSelector;

export default useSelector;
