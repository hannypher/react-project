function Backdrop(store) {
    return <div className='backdrop' onClick={store.onCancel} />;
}

export default Backdrop;