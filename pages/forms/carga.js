import Layout from "@/components/Layout";
import Link from "next/link";

const frm_carga = () => (

    <Layout>

<section className="d-flex align-items-center justify-content-center py-4">
    <div className="col-md-6">
    <div className="card card-body border-primary">
    <div className="row">
        <form>
        <fieldset>
          <legend>Registrar Carga</legend>
          <div className="form-group">
            <label className="form-label mt-4">Remitente</label>
            <input type="text" className="form-control" id="exampleTextarea" aria-describedby="textarea" placeholder="Remitente"/>
          </div>
          <div className="form-group">
            <label className="form-label mt-4">Origen</label>
            <input type="text" className="form-control" id="exampleTextarea" aria-describedby="textarea" placeholder="Origen"/>
          </div>
          <div className="form-group">
            <label className="form-label mt-4">Destinatario</label>
            <input type="text" className="form-control" id="exampleTextarea" aria-describedby="textarea" placeholder="Ingrese datos"/>
          </div>
          <div className="form-group">
            <label className="form-label mt-4">Destino</label>
            <input type="text" className="form-control" id="exampleTextarea" aria-describedby="textarea" placeholder="Ingrese datos"/>
          </div>
          <div className="form-group">
            <label className="form-label mt-4">Tipo de carga</label>
            <input type="text" className="form-control" id="exampleTextarea" aria-describedby="textarea" placeholder="Ingrese datos"/>
          </div>
          <div className="form-group">
            <label className="form-label mt-4">Fecha Carga</label>
            <input type="text" className="form-control" id="exampleTextarea" aria-describedby="textarea" placeholder="Ingrese datos"/>
          </div>
          <div className="form-group">
            <label className="form-label mt-4">Fecha Entrega</label>
            <input type="text" className="form-control" id="exampleTextarea" aria-describedby="textarea" placeholder="Ingrese datos"/>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1" className="form-label mt-4">Chofer</label>
            <input type="text" className="form-control" id="exampleTextarea" aria-describedby="textarea" placeholder="Chofer"/>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1" className="form-label mt-4">Camion</label>
            <input type="text" className="form-control" id="exampleTextarea" aria-describedby="textarea" placeholder="Placa del camion"/>
          </div>
          <div className="form-group">
            <label className="small">Verificar los datos antes de registrar</label>
            
          </div>
          <Link legacyBehavior href="/formularios">
          <button type="submit" className="btn btn-outline-primary">Guardar</button>
          </Link>
          <Link legacyBehavior href="/formularios">
          <button type="submit" className="btn btn-outline-danger">Cancelar</button>
          </Link>
        </fieldset>
      </form>
    </div>
    </div>
    </div>
</section>
    </Layout>

)

export default frm_carga;

