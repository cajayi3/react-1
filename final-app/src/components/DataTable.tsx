import React, { useState } from 'react'
import Button from './Button'
import Modal from './Modal'
import { server_calls } from '../api/server';
import { useGetData } from '../custom-hooks/FetchData';
import { DataGrid, GridColDef  } from '@mui/x-data-grid';


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90, hide:true },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'model', headerName: 'Model', flex: 2},
    { field: 'color', headerName: 'Color', flex:2},
    { field: 'year', headerName: 'Year', flex: 1},
    { field: 'gas', headerName:'Gas', flex: 1},
    { field: 'mpg', headerName:'MPG', flex:1}
]

function DataTable() {
    const [ open, setOpen ] = useState(false);
    const { carData, getData } = useGetData();
    const [ setSelectionModel, selectionModel ] = useState<[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => { window.location.reload() }, 500)
    }



    return (
      <>
        <Modal
            id={selectionModel} 
            open={open}
            onClose={handleClose}
        />
        <div className='flex flex-row'>
            <div>
                <button
                    className='p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white'
                    onClick={() => handleOpen()}
                >
                    Create New Car
                </button>
            </div>
                <Button onClick={handleOpen} className='p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white'>Update</Button>
                <Button onClick={deleteData} className='p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white'>Delete</Button>
            </div>

           <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
            style={{ height: 400, width: '100%' }}
            >
                <h2 className="p-3 bg-slate-300 my-2 rounded">Cars</h2>
                <DataGrid rows={carData} columns={columns} rowsPerPageOptions={[7]}
                checkboxSelection={true}
                onSelectionModelChange={ (item:any) => {
                    setSelectionModel(item)
                }}
                />
            </div>
      </>
    )
}
export default DataTable