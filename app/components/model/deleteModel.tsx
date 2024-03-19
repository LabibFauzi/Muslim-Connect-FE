import React from 'react'

interface DeleteModelProps {
    onClose: () => void;
}
const DeleteModel:React.FC<DeleteModelProps> = ({onClose}) => {
return (
    <div className='fixed flex top-0 left-0 w-full h-full bg-black bg-opacity-30 z-50 justify-center items-center'>
        <div className='flex flex-col bg-white w-1/3 h-auto rounded-2xl p-3 gap-3'>
            <div className='flex flex-row items-center justify-between w-full gap-24 p-2'>
                <h1 className='font-bold text-2xl'>Hapus Postingan ?</h1>
                <button onClick={onClose}>
                    <img src="/asets/exit.png" alt="" className='flex w-8 h-8 hover:scale-110'/>
                </button>
            </div>
            <div className='flex border-b-2 w-full'></div>
            <h1 className='justify-start text-lg pb-10 text-neutural3'>Anda yakin ingin menghapus  postingan ini?</h1>
            <form className='flex justify-end gap-3'>
                <button className='bg-white w-28 h-12  text-secondarymain font-bold text-xl rounded-lg  duration-150' onClick={onClose}>Batal</button>
                <button className='bg-secondarymain w-28 h-12 text-white font-bold text-xl rounded-lg hover:bg-secondaryhover duration-150'  >Hapus</button>
            </form>
        </div>
    </div>
)
}

export default DeleteModel
