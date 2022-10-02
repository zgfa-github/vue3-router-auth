import { createStore } from 'vuex';
import state from './state';
import actions from './actions';
import mutations from './mutations';
import { IState } from '@/types';
const store = createStore<IState>({
    state,
    actions,
    mutations,
})

export default store;