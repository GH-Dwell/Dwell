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

@app.route("/", methods=("GET", "POST"))
@cross_origin()
def serve_all(): 
    if request.method == "POST": 
        location = request.form.get('location')
        result = df[df["city"] == location].to_dict(orient='records')
    else: 
        result = df.head().to_dict(orient='records')
    return result

if __name__ == '__main__': 
    app.run(host='0.0.0.0')