import React, { useState } from 'react'
import Button from './Button'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import Modal from './Modal';
import { useGetData } from '../custom-hooks';
import { server_calls } from '../api';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90, hide: true },
    { field: 'name', headerName: 'Contact Name', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'phone_number', headerName: 'Phone Number', flex: 1 },
    { field: 'address', headerName: 'Address', flex: 2 }
];

interface gridData {
    data: {
        id?: string
    }
};



export default function DataTable() {
    // We will write our OWN. HOOK. later
    // write functionality for populating our grid
    const [ open, setOpen ] = useState(false)
    const { contactData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<any>([])

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    // add delete data function etc
    const deleteData = () => {
        server_calls.delete(selectionModel);
        getData();
        setTimeout( () => { window.location.reload() }, 1000 )
    }

    console.log(`selection model: ${selectionModel}`)

    return (
        <>
            <Modal
                id={ selectionModel }
                open={open}
                onClose={() => handleClose()}
            />
            <div className="flex flex-row">
                <div>
                    <Button
                        onClick={ handleOpen }
                        className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white"
                    >
                        Create New Contact
                    </Button>
                </div>
            <Button onClick={ handleOpen } className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white">Update</Button>
            <Button onClick={ deleteData } className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white">Delete</Button>
            </div>
            <div
                className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
                style={{ height: 400, width: '100%' }}
            >
                <h2 className='p-3 bg-slate-300 my-2 rounded'>My Contacts</h2>
                <DataGrid rows={ contactData } columns={ columns } rowsPerPageOptions={ [5] } checkboxSelection={true}
                onSelectionModelChange={ (item:any) => {
                    setSelectionModel(item)
                }}
                />
            </div>
        </>
    )
}
