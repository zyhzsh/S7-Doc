import UserFlowDesign from '@site/src/img/realtime_1.png';
import CodeSnip from '@site/src/img/realtime_2.png';
import Versioning from '@site/src/img/realtime_3.png';
import Demo from '@site/src/img/realtime_4.gif';

# Real time connection - Technically Prototype

## Context

To ensure a comprehensive training experience for users, it is necessary to establish real-time connectivity between the four endpoints: "Hang Board", "Screen (Desktop Application)", "Mobile Application", and "Backend" through technical means.

#### Outcomes - 1: Process design beforehand

_To clearly define the processing flow_

<img src={UserFlowDesign}/>

[<u>Link</u>](https://excalidraw.com/#json=EJRprakWxo1pZqvrbJuEz,7LOmDekFF_l9YUsZ7FtkMQ)

#### Outcomes - 2: To improve the process and enhance user experience, utilize a QR scanner to establish a connection

_While waiting for my groupmate to resolve the Bluetooth connection issue, I began implementing the QR scanning feature to improve user experience._

#### Outcomes - 3: (Technical issue research) Identified and fixed a bug that was causing the "Desktop Application" to malfunction with real-time connections.

_The connection between the Backend and Desktop application did not work as expected. The issue was that while two different pages subscribed to the same database table change event, the socket connection only worked when the page was first rendered._

_The image below displays a the code snippet_

<img src={CodeSnip}/>

_Upon conducting a thorough investigation, it was determined that the problem was caused by in library version. In order to address this issue, various versions of the Supabase SDK were tested, and it was found that versions after 1.0.1 support multi-threaded data update subscriptions. However, for compatibility with the Bluetooth library, it was necessary to downgrade the SDK library. Consequently, the subscription thread must be manually managed. Code modifications were implemented to address the issue and it is expected that the system is now functioning properly._

<img src={Versioning}/>

#### Outcomes - 4: Estimated the connection between the four endpoints as expected.

<img src={Demo}/>
