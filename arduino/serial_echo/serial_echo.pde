// serial echo

char serial_recv;
char led_pin = 13;
boolean led_stat = true;
char ad_pin = 0;
int ad = 0;

void setup(){
    pinMode(led_pin, OUTPUT);
    Serial.begin(9600);
    digitalWrite(led_pin, led_stat);
}

void loop(){
    while(Serial.available() > 0){
        serial_recv = Serial.read();
        Serial.println(serial_recv); // echo
        if(serial_recv == 'a'){
            led_stat = !led_stat;
            digitalWrite(led_pin, led_stat);
        }
    }
    ad = analogRead(0);
    Serial.println(ad);
    delay(500);
}


