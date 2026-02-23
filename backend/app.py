from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/contact', methods=['POST'])
def contact():
    return jsonify({"message": "Hello Ankit, your message was received!"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
