
from flask import Flask,request, jsonify, render_template
import pickle
import sklearn
from sklearn import preprocessing
from xgboost import XGBClassifier
import pandas as pd
print(sklearn.__version__)

app = Flask(__name__)
model = pickle.load(open('grad_correct scaling.pkl', 'rb'))
scaler = pickle.load(open('min_max_scaler scaling.pkl', 'rb'))

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict',methods=['POST'])
def predict():
    '''
    For rendering results on HTML GUI
    '''
    int_features = [float(x) for x in request.form.values()]
    X_testt=pd.DataFrame(int_features)
    X_testt=X_testt.T
    X_testt=scaler.transform(X_testt)
    X_testt=pd.DataFrame(X_testt)
    X_testt.columns=['Laboratory_test_L', 'Laboratory_test_N', 'Laboratory_test_ESR_(mm/hr)', 'Laboratory_test_CRP_(mg/L)', 'Laboratory_test_PCT_(ng/ml)', 'Laboratory_test_CK_MB_(ng/ml)', 'Laboratory_test_D_dimer_(ug/ml)', 'Laboratory_test_ALT_(U/L)', 'Laboratory_test_AST_(U/L)', 'Laboratory_test_ALB_(g/L)', 'Laboratory_test_LDH_(U/L)', 'Age', 'CK', 'O2%', 'Symptoms_Cough', 'Symptoms_Dyspnea', 'Symptoms_Fatigue'] 
    
    pred = model.predict(X_testt)
    if pred ==0:
        prediction="not_severe"
    if pred ==1 :
        prediction="severe"
    print("severity prediction",prediction)
    return render_template('index.html', prediction_text='Patient condition is going to be $ {}'.format(prediction))
    #return(prediction)

if __name__ == "__main__":
    app.run(debug=False)
    