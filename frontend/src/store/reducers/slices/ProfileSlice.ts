import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProfile } from '../../../models/models'

interface ProfileSlice {
    profile: IProfile
    isLoading: boolean
    error: string
}

const initialState: ProfileSlice = {
    profile: { username: '', first_name: '', last_name: '', email: '' },
    isLoading: false,
    error: '',
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        profileFething(state) {
            state.isLoading = true
        },
        profileFethingSuccess(state, action: PayloadAction<IProfile>) {
            state.isLoading = false
            state.error = ''
            state.profile = action.payload
        },
        profileFethingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
    },
})

export default profileSlice.reducer
