from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This enables CORS for all routes

@app.route('/api/contact', methods=['POST'])
def contact():
    try:
        # Get data from the request
        data = request.json
        name = data.get('name')
        email = data.get('email')
        message = data.get('message')
        
        # Print to console (you'll see this in your terminal)
        print(f"📧 New message from: {name} ({email})")
        print(f"Message: {message}")
        print("-" * 40)
        
        # Send response back to frontend
        return jsonify({
            "message": f"Thanks {name}! Your message was received."
        }), 200
        
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({
            "message": "Something went wrong. Please try again."
        }), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
