import Layout from "@/components/Layout";
import Link from "next/link";

const frm_chofer = () => (

    <Layout>
    <section className="d-flex align-items-center justify-content-center py-4">
        <div className="col-md-6">
            <div className="card card-body border-primary">
                <div className="row">
                    <form>
                        <fieldset>
                            <legend>Registrar Chofer</legend>
                            <div className="form-group">
                                <label for="exampleInputEmail1" className="form-label mt-4">Nombre</label>
                                <input type="text" className="form-control" id="exampleTextarea" aria-describedby="textarea" placeholder="Nombre" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1" className="form-label mt-4">Apellido Paterno</label>
                                <input type="text" className="form-control" id="exampleTextarea" aria-describedby="textarea" placeholder="Apellido Paterno" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1" className="form-label mt-4">Apellido Materno</label>
                                <input type="text" className="form-control" id="exampleTextarea" aria-describedby="textarea" placeholder="Apellido Materno" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1" className="form-label mt-4">Numero de carnet</label>
                                <input type="text" className="form-control" id="exampleTextarea" aria-describedby="textarea" placeholder="Nº de carnet" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1" className="form-label mt-4">Licencia</label>
                                <input type="text" className="form-control" id="exampleTextarea" aria-describedby="textarea" placeholder="Licencia" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1" className="form-label mt-4">Telefono</label>
                                <input type="number" className="form-control" id="exampleTextarea" aria-describedby="number" placeholder="Telefono" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1" className="form-label mt-4">Direccion</label>
                                <input type="text" className="form-control" id="exampleTextarea" aria-describedby="textarea" placeholder="Direccion" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1" className="form-label mt-4">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Direccion de email" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1" className="form-label mt-4">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" autocomplete="off" />
                                <small id="emailHelp" className="form-text text-muted">Nunca compartiremos tu informacion personal.</small>
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

export default frm_chofer;