import { createTypedHooks } from 'easy-peasy';
import { IStoreModel } from './index';

const typedHooks = createTypedHooks<IStoreModel>();

export const { useStoreActions } = typedHooks;
export const { useStoreDispatch } = typedHooks;
export const { useStoreState } = typedHooks;
