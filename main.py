from flask import Flask, render_template ,request,url_for #import flask class

import mysql.connector
mydb = mysql.connector.connect(
    host = 'sql7.freemysqlhosting.net',
    user = 'sql7384553',
    passwd = 'EBclWXd7nQ',
    database = 'sql7384553'
)
myCursor = mydb.cursor()

app = Flask(__name__) 
app.config["TEMPLATES_AUTO_RELOAD"] = True

@app.route('/')
def Aindex():
    myCursor.execute("SELECT count(id) FROM dr")
    myResult3 = myCursor.fetchall()

    myCursor2 = mydb.cursor()
    myCursor2.execute("SELECT count(ssn) FROM patient")
    myResult4 = myCursor2.fetchall()
    
    myCursor3 = mydb.cursor()
    myCursor3.execute("SELECT count(*) FROM contact_us")
    myResult6 = myCursor3.fetchall()
    return render_template('Aindex.html', doctors_no = myResult3 ,p_no =myResult4,comp_no =myResult6)


@app.route('/Adoctor')
def Adoctor():
    myCursor.execute("SELECT * FROM dr")
    myResult = myCursor.fetchall()
    return render_template('Adoctor.html' ,doctors_data = myResult)

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
    myCursor.execute("SELECT * FROM patient")
    myResult2 = myCursor.fetchall()
    return render_template('Apatient.html' , patients_data = myResult2)

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
    myCursor.execute("SELECT * FROM contact_us")
    myResult5 = myCursor.fetchall()
    return render_template('Acomplains.html' ,complains_data = myResult5)

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

