# Express HTTPS Server

Simple Express server that can handle http and https requests.

Place your certificate, private key, and other SSL required files in the /certs directory.

Run the app with this command
```
node app.js
```

View in your browser by visiting in http or https
```
http://localhost:8080
https://localhost:8443
```

If it works then you should see Hello World!

Note: Self-signed certificates will need to be accepted in the browser or added as Trusted.

Information on getting SSL to work with Express was from this source:

https://stackoverflow.com/questions/11744975/enabling-https-on-express-js