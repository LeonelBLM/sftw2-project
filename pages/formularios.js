import Layout from "@/components/Layout";
import Link from "next/link";

const Formularios = () => (

    <Layout>

        <h1>Formularios</h1>

        <div className="card border-primary mb-3">
            <div className="card card-body border-primary">
                <Link legacyBehavior href="/forms/client">
                    <button type="button" className="btn btn-outline-primary mb-2">Clientes</button>
                </Link>
                <Link legacyBehavior href="/forms/chofer">
                    <button type="button" className="btn btn-outline-primary mb-2">Chofer</button>
                </Link>
                <Link legacyBehavior href="/forms/camion">
                    <button type="button" className="btn btn-outline-primary mb-2">Camion</button>
                </Link>
                <Link legacyBehavior href="/forms/carga">
                    <button type="button" className="btn btn-outline-primary mb-2">Carga</button>
                </Link>
                <Link legacyBehavior href="/forms/mantenimiento">
                    <button type="button" className="btn btn-outline-primary mb-2">Mantenimiento</button>
                </Link>
            </div>
        </div>

    </Layout>

)
export default Formularios;