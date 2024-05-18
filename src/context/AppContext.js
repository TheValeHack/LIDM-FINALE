import { createContext, useReducer } from "react"

export const AppReducer = (state, action) => {
    switch(action.type){
        case 'SCROLL_PAGE':
            let scrollToPage = action.payload.number
            state.pdfPage = scrollToPage
            action.type = 'DONE'
            return {
                ...state
            }
        case 'ZOOM_PAGE':
            let zoomPage = action.payload.zoom
            state.pdfZoom = zoomPage
            action.type = 'DONE'
            return {
                ...state
            }
        case 'EDIT_CATATAN':
                let editCatatan = action.payload.edit
                state.editCatatan = editCatatan
                action.type = 'DONE'
                return {
                    ...state
                } 
        case 'SET_CATATAN':
                let catatan = action.payload.catatan
                state.currentCatatan = catatan
                
                action.type = 'DONE'
                return {
                    ...state
                } 
        case 'SET_KODE_KELAS':
            let kode = action.payload.kode
            state.kodeKelas = kode
            
            action.type = 'DONE'
            return {
                ...state
            }
        case 'SET_KELAS':
            let kelas = action.payload.kelas
            state.daftarKelas = kelas
            
            action.type = 'DONE'
            return {
                ...state
            }     
        default:
            return state
    }
}

const initialState = {
    pdfPage: 1,
    pdfZoom: 1,
    editCatatan: true,
    currentCatatan: '',
    kodeKelas: '',
    daftarKelas: {},
}

export const AppContext = createContext()

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider
            value={{
                dispatch,
                pdfPage: state.pdfPage,
                pdfZoom: state.pdfZoom,
                editCatatan: state.editCatatan,
                currentCatatan: state.currentCatatan,
                kodeKelas: state.kodeKelas,
                daftarKelas: state.daftarKelas
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}