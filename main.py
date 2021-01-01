from flask import Flask, render_template ,request#import flask class

import mysql.connector
mydb = mysql.connector.connect(
    host = 'localhost',
    user = 'root',
    passwd = '',
    database = 'myPythonDatabase'
)
myCursor = mydb.cursor()

app = Flask(__name__) 
app.config["TEMPLATES_AUTO_RELOAD"] = True

@app.route('/')
def Aindex():
    return render_template('Aindex.html')

@app.route('/Aindex')
def A2index():
    return render_template('Aindex.html')


@app.route('/Adoctor')
def Adoctor():
    return render_template('Adoctor.html')

@app.route('/Dedit')
def Dedit():
    return render_template('Dedit.html')

@app.route('/Ddelete')
def Ddelete():
    sql = "INSERT INTO doctors (name,departement,id) VALUES(%s,%s,%s)"
    value = (name ,departement,id)
    myCursor.execute(sql,value)
    mydb.commit()
    return render_template('Doctor.html')


@app.route('/Apatient') 
def Apatient():
    return render_template('Apatient.html')

@app.route('/Pedtit')
def Pedit():
    return render_template('Pedit.html')

@app.route('/Pdelete')
def Pdelete():
    sql = "INSERT INTO doctors (name,departement,id) VALUES(%s,%s,%s)"
    value = (name ,departement,id)
    myCursor.execute(sql,value)
    mydb.commit()
    return render_template('patient.html')


@app.route('/Acomplains') 
def Acomplains():
    return render_template('Acomplains.html')

@app.route('/Cedtit')
def Cedit():
    return render_template('Cedit.html')

@app.route('/Cdelete')
def Cdelete():
    sql = "INSERT INTO doctors (name,departement,id) VALUES(%s,%s,%s)"
    value = (name ,departement,id)
    myCursor.execute(sql,value)
    mydb.commit()
    return render_template('complains.html')



if __name__ == '__main__':
    app.run() # dh by run server 3la el local host bta3e

