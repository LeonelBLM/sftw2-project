import Layout from "@/components/Layout";
import Link from "next/link";

const frm_mantenimiento = () => (

    <Layout>
    <section className="d-flex align-items-center justify-content-center py-4">
    <div className="col-md-6">
    <div className="card card-body border-primary">
    <div className="row">
      <form>
        <fieldset>
          <legend>Registrar Mantenimiento</legend>
          <div className="form-group">
            <label className="form-label mt-4">Placa del Camion</label>
            <input type="text" className="form-control" id="exampleTextarea" aria-describedby="textarea" placeholder="Placa"/>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1" className="form-label mt-4">Fecha</label>
            <input type="text" className="form-control" id="exampleTextarea" aria-describedby="textarea" placeholder="Modelo"/>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1" className="form-label mt-4">Año</label>
            <input type="text" className="form-control" id="exampleTextarea" aria-describedby="textarea" placeholder="Año"/>
          </div>
          <div className="form-group">
            <label className="form-label mt-4">Costo</label>
            <div className="form-group">
              <div className="input-group mb-3">
                <span className="input-group-text">$</span>
                <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
                <span className="input-group-text">.00</span>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label for="exampleTextarea" className="form-label mt-4">Descripcion</label>
            <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
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

export default frm_mantenimiento;
