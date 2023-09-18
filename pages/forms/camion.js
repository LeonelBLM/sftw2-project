import Layout from "@/components/Layout";
import Link from "next/link";

const frm_camion = () => (

    <Layout>
    <section className="d-flex align-items-center justify-content-center py-4">
        <div className="col-md-6">
            <div className="card card-body border-primary">
                <div className="row">
                    <form>
                        <fieldset>
                            <legend>Registrar Camion</legend>
                            <div className="form-group">
                                <label className="form-label mt-4">Marca</label>
                                <input type="text" className="form-control" id="exampleTextarea" aria-describedby="textarea" placeholder="Marca" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1" className="form-label mt-4">Modelo</label>
                                <input type="text" className="form-control" id="exampleTextarea" aria-describedby="textarea" placeholder="Modelo" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1" className="form-label mt-4">Año</label>
                                <input type="text" className="form-control" id="exampleTextarea" aria-describedby="textarea" placeholder="Año" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1" className="form-label mt-4">Placa</label>
                                <input type="text" className="form-control" id="exampleTextarea" aria-describedby="textarea" placeholder="Placa" />
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

export default frm_camion;