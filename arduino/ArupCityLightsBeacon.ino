// 24 Hours Light exhibition at Arup
// Arduino BLE beacon using a BLE sheld with the NRF8001 BLE chip
// 2014-11-10 Francesco Anselmo
// francesco.anselmo@arup.com

// Include BLE related libraries.
#include <SPI.h>
#include <boards.h>
#include <RBL_nRF8001.h>


char beaconName[] = "URBAN";
/* Choose a beacon name from the following
 * CLOCK
 * URBAN
 * EXPERIENCE
 * DAYLIGHT
 * VIDEO
 * SMART
 * MEDIA
 */

// Setup function (only called once, at power up or reset)
void setup()
{
    // Enable serial debug
    Serial.begin(9600);
    Serial.print("Arduino BLE beacon: ");
    Serial.println(beaconName);

    // Set a location specific BLE name for the beacon
    ble_set_name(beaconName);

    // Start the BLE beacon
    ble_begin();

    Serial.println("Beacon ready");
}

// Loop function, continuously cycling after setup() has finished running
void loop()
{
    // Respond to BLE events
    ble_do_events();
}
