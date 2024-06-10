// Controlador para el manejo de profit
//import {trans_invoice, get_profit_2k8_documents, get_lote } from "../modules/profit2k8_mod.js"

/*
export const getInvoices = async (req, res) => {   
    try {
        let fecha= req.params.fec_fin + ' 23:59:59'
        const invoices = await get_profit_2k8_documents(fecha)
        res.status(200).json(invoices)
        // console.log(invoices);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error})
    }        
}

export const setInvoices = async (req, res) => {   // Cambiar funcion
    try {
        let fecha= req.params.fec_fin + ' 23:59:59'
        const invoices = trans_invoice(fecha)
        res.status(200).json({message: 'Porcesando Facturas... espere un momento.'})
    } catch (error) {
        res.status(500).json({message: 'Se encontraron algunos errores en el proceso: ' + error})
    }        
}

export const getLote = async (req, res) => {   // Cambiar funcion
    try {
        let lote_num = req.params.lote_num;
        let doc_num = req.params.doc_num || null;
        let error = 0;

        if (doc_num === 'A') {
            doc_num = null;
        } else if (doc_num === 'E') {
            error = 1;
            doc_num = null;
        }
        const lote_docs = await get_lote(lote_num, doc_num, error)
        res.status(200).json({lote_doc: lote_docs})
    } catch (error) {
        res.status(500).json({message: 'Se encontraron algunos errores en el proceso: ' + error})
    }        

    }
*/
