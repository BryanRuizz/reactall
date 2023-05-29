<div className="container-dash-menu bg_animate">
<ConfirmExit
    Message={user + " ¿Seguro(a) que deseas salir de Aldafa XAM?"}
    ConfirmTitle={'Aceptar '}
    Open={isOpen.delete}
    Function={exitApp}
    CloseFunc={closeCancel}
/>

{/*br me he traido el header y un boton para salirte*/}
{/*<HeaderLlanta  />*/} 
<div style={{ height: "64px", position: "fixed", right: "0px", top: "10px", width: "64%", zIndex: "1030" }}>
    <div style={{ width: "100%", display: "flex", justifyContent: "right", alignItems: "center" }}>
        <button onClick={end} style={{ width: "60px", height: "60px", display: "flex", justifyContent: "center", alignItems: "center", marginRight: "40px", marginBottom: "50px", color: "#000",  background: "rgba(128, 128, 128, 0.3)", borderRadius: "50%"}}>
            <SlLogout />{/*boton para cerrar sesion */}
        </button>
    </div>      
</div>
{/* <div className="fixed-top " style={{ alignItems: "center", display: "flex", justifyContent: "center", height: "80px", background: "#f1101b" }}>
    <img src={logo} className='logo-p' style={{ zIndex: "10" }} />
</div> */}
<div className="container-dash-card">
    <h1>Bienvenido {name} ¿Que vamos a hacer hoy?</h1>
    <br></br>
    <div className="row">
        <div className="card-dash-menu" onClick={Mtto}>
            <div className="container-card-dash-incon"><BsTools /></div>
            XAM - Mantenimiento
        </div>
        <div className="card-dash-menu" onClick={() => setOpen(!open)}>
            <div className="container-card-dash-incon"><GiFlatTire /></div>
            XAM - Llantas
        </div>
        <div className="burbujas">
            <div className="burbuja"></div>
            <div className="burbuja"></div>
            <div className="burbuja"></div>
            <div className="burbuja"></div>
            <div className="burbuja"></div>
            <div className="burbuja"></div>
        </div>