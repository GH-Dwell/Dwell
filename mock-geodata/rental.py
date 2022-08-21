from flask import Flask, request, render_template, session, redirect
from flask_cors import CORS, cross_origin
import numpy as np
import pandas as pd

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'; 

def get_df(): 
    df = pd.read_csv('data_mock_01r.csv')
    # sa2_codes = pd.read_csv("SA2_CODES_FULL.csv")
    # sa2_codes = sa2_codes.rename(columns={'SA2_CODE21': "sa2_code"})
    # sa2_codes['sa2_code'] = sa2_codes['sa2_code'].astype(np.int64)
    # df.merge(sa2_codes[['sa2_code', 'Geoj']], on=['sa2_code'], how='left')
    return df

df = get_df()
dests = pd.DataFrame(data={
    'value': [ "Sydney", "Melbourne", "Brisbane", "Adelaide", "Perth", "Hobart", "Darwin", "Canberrra" ], 
    'label': [ "Sydney", "Melbourne", "Brisbane", "Adelaide", "Perth", "Hobart", "Darwin", "Canberra" ], 
    'coords': [ [-33.8688, 151.2093], [-37.8143, 144.9611], [-27.4705, 153.0261], [-34.9286, 138.6009], [-31.9525, 115.8613], 
        [-42.8785, 147.3242], [-12.4648, 130.8440], [-35.3074, 149.1243] ]
})

@app.route("/", methods=["GET", "POST"])
@cross_origin()
def serve_all(): 
    if request.method == "POST": 
        location = request.form.get('location')
        result = df[df["city"] == location].to_dict(orient='records')
    else: 
        result = df.head().to_dict(orient='records')
    return result

@app.route("/cities", methods=["GET"])
@cross_origin()
def serve_cities(): 
    # result = pd.unique(df["city"][df["city"] != "Regional"])
    return dests.to_dict(orient='records')

if __name__ == '__main__': 
    app.run(host='0.0.0.0')