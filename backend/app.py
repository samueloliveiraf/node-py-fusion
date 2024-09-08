from flask import Flask, jsonify, request
from flask_cors import CORS
import logging


logging.basicConfig(level=logging.INFO)

app = Flask(__name__)
CORS(app)


alimentacao_data = {
    "Vegetariano": [
        "Vegetais (legumes e verduras em geral)",
        "Frutas",
        "Carne magra (aves, peixes, carne sem gordura)",
        "Ovos",
        "Doces (doces de qualquer tipo, bolos recheados com cobertura, biscoitos doces, refrigerantes e sucos industrializados)",
        "Grãos (arroz, milho e outros grãos)",
        "Massas",
        "Leite e seus derivados (iogurte, bebida láctea, coalhada, requeijão, queijo)",
        "Pães"
    ],
    "Vegano": [
        "Vegetais (legumes e verduras em geral)",
        "Frutas",
        "Grãos (arroz, milho e outros grãos)",
        "Massas",
        "Pães"
    ],
    "Sem Restrição": [
        "Vegetais (legumes e verduras em geral)",
        "Frutas",
        "Carne gordurosa (porco, carne bovina com gordura, pele de frango)",
        "Carne magra (aves, peixes, carne sem gordura)",
        "Frituras ou embutidos (salgadinho frito, hambúrguer, carne salgada, presunto, salsicha, mortadela, salame, linguiça e outros)",
        "Ovos",
        "Doces (doces de qualquer tipo, bolos recheados com cobertura, biscoitos doces, refrigerantes e sucos industrializados)",
        "Grãos (arroz, milho e outros grãos)",
        "Massas",
        "Leite e seus derivados (iogurte, bebida láctea, coalhada, requeijão, queijo)",
        "Pães"
    ]
}


@app.route('/getAlimentacao', methods=['GET'])
def get_alimentacao():
    return jsonify(alimentacao_data)


@app.route('/submitFormulario', methods=['POST'])
def submit_formulario():
    data = request.json
    del data['']
    del data['selectedAlimentos']
    
    app.logger.info(data)

    return jsonify({'message': data})


if __name__ == '__main__':
    app.run(debug=True)
