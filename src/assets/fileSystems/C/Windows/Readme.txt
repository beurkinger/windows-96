------------------------------------------------------------
         README for The Microsoft Network 2.51 
                         September l997            
------------------------------------------------------------

        (c) Copyright Microsoft Corporation, 1997


This document provides complementary or late-breaking information
for The Microsoft Network 2.51.

For the most current information about MSN, always check online at
http://memberservices.msn.com.

-------------------------
HOW TO USE THIS DOCUMENT
-------------------------

To view Readme.txt onscreen in Notepad, maximize the Notepad 
window.

To print Readme.txt, open it in Notepad or another word 
processor, and then use the Print command on the File menu.

Thank you for joining The Microsoft Network. This 
document contains information that will help you solve common 
problems and get the most out of The Microsoft Network.


Table of Contents
=================
1. System Requirements
2. Video Cards and Display Problems
3. Hard Disk Location of MSN Program Files
4. Microsoft Internet Explorer Installation
5. Installation Problems
6. Known Problems with This Release
7. Outlook Express Mail & News
8. Connection Problems
9. Removing MSN Files and Shortcuts



1.  System Requirements
=======================
* Windows 95 or later
* Personal computer with a 486/66 or higher processor
* 14.4 Kbps modem or higher
* 16MB of memory required
* 25MB available hard disk space
* CD-ROM drive (2x or higher)
* VGA or higher resolution graphics card
* Sound card recommended
* Microsoft Mouse or compatible pointing device

MSN is compatible only with Windows 95 or later.  It does not run
on Windows NT or on Windows 3.1.  MSN is considering future 
support for Windows NT.
 
In order to fully experience MSN you will need a sound card and 
speakers.  MSN will function properly without them, but audio is 
an integral part of the full experience. 



2.  Video Cards and Display Problems
====================================
LESS THAN 256 COLOR:
MSN Setup will run if your display is set to 16-color mode; 
however, it is designed to run at 640x480 resolution or higher, 
with a minimum of 256 colors. If your display is set to show 16 
colors, we strongly recommend that you change your display 
setting to show 256 colors or more. 

If you experience problems with display colors, check your 
color configuration:
1. Click the Windows Start button, then click Settings,
   Control Panel. 
2. Double-click the Display icon.
3. Click the Settings tab.
4. In the Color palette list box, click 256 Color.

MORE THAN 256 COLOR:
MSN is designed to look even better at higher color settings.
You will find that much of the text is more readable and the 
images much clearer when you set your display resolution to 
16 bit (65,536 colors) or higher.

Some video cards may encounter problems when using accelerated 
video drivers, video drivers with more than 256 colors, or high 
resolution video drivers.

If you run into display problems:
1. Try switching to a driver supplied with Windows 95 or later.
2. Change to a different display mode. An alternative to using a 
   different driver is to change your video mode to a standard 
   video mode such as 640x480 resolution with 256 colors.

For details on how to change drivers or switch to a different 
display mode, see your Windows documentation.

NEC computers using the Alliance Promotion video card do not work 
well with the MSN setup program. Please contact your computer 
dealer for assistance.



3.  Hard Disk Location of MSN Program Files
===========================================
MSN requires that its files be installed on your system disk (the 
drive from which your computer boots, generally the C: drive).  

If you do not have enough space on your system drive, Setup will 
notify you.  You will need to make room on your system disk in 
order to install MSN.   



4.  Microsoft Internet Explorer Installation
============================================
MSN requires that you have Internet Explorer (IE) version 4.0 
installed.  If you have not yet installed IE 4.0, please 
install it before attempting to install MSN 2.51.

WARNING: Do not install any previous version of Internet Explorer 
over Internet Explorer 4.0. If you need to install an earlier version 
of Internet Explorer, you must uninstall Internet Explorer 4.0 first.

You should always uninstall your current version of 
Internet Explorer 4.0 before installing a newer build.


5.  Installation Problems
=========================
VERSION CONFLICTS:
You may encounter a version conflict when running 
the MSN setup program, or when logging in for the first time.  
If a "Version Conflict" dialog box is displayed, always keep the newer
version. The dialog box will usually ask, "Do you want to keep this file?"
to which you should click "Yes."


PROGRAMS RUNNING DURING SETUP:
During MSN Setup, we notify you of any running programs that may interfere 
with the MSN installation.  Before continuing, we recommend that you close those
programs. This better ensures a successful installation.
Some programs, such as anti-virus applications that load automatically at startup, 
may be more difficult to close than others. If you are unable to close these programs, 
you can continue with MSN Setup by clicking the Next button and selecting "Yes" when 
you are given a "Do you want to continue anyway?" prompt. In most cases, MSN Setup will 
complete successfully. However, should you run into problems, for example, your system
stops responding for several minutes during Setup, please try the steps
below to disable all running applications prior to installing MSN.

Recommended steps to disable programs that load during startup:
1. Restart your computer.
2. While Windows is loading, hold down a Shift key.
3. After booting up, but before running other programs,
   press the Ctrl-Alt-Del keys together ONCE.  
   If there are programs in the list other than Explorer and Systray
   select them and click the End Task button.

Programs may also load automatically in the Startup folder.  These items can be
temporarily moved to another temporary folder or your desktop until MSN 
completes the installation.  Once finished they can be placed back in the 
Startup folder.  This folder is located in: Windows\StartMenu\Programs\Startup 
and the items appear as shortcuts.  Once moved from your Startup folder, be sure 
to restart your computer so that the changes will take effect.


6.  Known Problems with This Release
====================================
MSN SIGN IN APPEARS AFTER DISCONNECT:
Some programs like Outlook Express and some Web-based 
content like Microsoft Investor periodically check for updated 
information. If you are not already connected to the Internet when these checks
occur, MSN will attempt to dial in to the Internet for you.

There are two ways to prevent this from happening:
*  Close all Internet applications after you disconnect from the 
   Internet.
*  Disable the default dialer option for Internet access.  This
   will require that you first start your MSN connection before using 
   Internet applications. To do this:
     1. Click the MSN Quick View icon (the small hand
   	icon next to your clock in the Windows task bar). 
     2. Click MSN, then Connection Settings.
     3. Click the Options tab.
     4. Uncheck the Use this service for all dial-up Internet access option.


SIGNUP OR REQUEST NEW PASSWORD SERVERS ARE NOT AVAILABLE:
When you sign up for a new MSN account, or if you want to
change the password on your current account, MSN will step you 
through a process that puts your computer into "kiosk mode" (the 
IE 4.0 browser with no user interface controls). If there are 
Internet server problems while you are in kiosk mode, you can use 
the Alt-F4 keyboard command to cancel the operation and
close out of IE 4.0.


IE AS DEFAULT BROWSER:
Internet Explorer launches when you click e-mail, chat, or 
history links. MSN does not replace your default browser and 
will be activated only if you double-click the MSN icon on your 
desktop or click the MSN Quick View icon in the Windows system 
tray to connect to MSN.


JAVA SCRIPT OR VB SCRIPT ERROR:
Java or Visual Basic script errors could occur in the MSN 
Program Viewer for a couple of reasons:
1. The MSN Program Viewer does not support the "window.open" 
   command, which is supported by IE 3.0, IE 4.0, and
   Netscape 2.0, 3.0 & 4.0.  
   Pages that use this command will cause a script error in the 
   MSN Program Viewer.

2. MSN is now based on IE 4.0, which includes higher security 
   safeguards that will prevent some script commands from 
   executing on your machine.


MSN QUICK VIEW COMES BACK EVEN AFTER IT IS CLOSED:
The MSN Quick View icon in your Windows taskbar provides 
you with periodic information about your e-mail message count and
the status of your friends online, and it checks to make sure 
that your MSN client software is up to date.  

Even if you close MSN Quick View, it will be restarted if you 
visit a Web page that requires its functionality.  For example,
MSN's On Stage and Communicate home pages use MSN Quick View to 
display your new e-mail count.  


REMOVING MSN QUICK VIEW FROM STARTUP:
If you do not want MSN Quick View to start when you turn on 
your computer, you can remove it from your Windows Startup group.  

To remove MSN Quick View from your Startup group:
1. Click the Windows Start button, then click Settings, Taskbar.
2. Click the Start Menu Programs tab. 
3. Click the Remove button.
4. Click the plus (+) sign next to the Startup folder that appears
   in the list.
5. Click MSN Quick View to select it.
6. Click the Remove button. MSN Quick View will no longer start up 
   with Windows. 

Please note that MSN Quick View will still automatically start when 
you connect to MSN or when you connect via a LAN or a proprietary dialer. 
MSN Quick View will also start up whenever you visit a page that uses 
Quick View's services, such as MSN's Communicate home page.


MSN QUICK VIEW BEHAVIOR WHEN USING A LAN TO CONNECT TO MSN:
If you connect to MSN using a LAN, MSN Quick View will be unable
to tell when you are done using MSN. If you want to disconnect 
from MSN, you will need to select that option from the MSN Quick 
View menu. 

Otherwise, MSN Quick View will restart anytime you 
visit a page that uses MSN Quick View's services.
MSN Quick View will detect that you are configured to connect over 
a LAN and start a "sleep" timer, which will count down and put MSN Quick 
View to sleep.  When MSN Quick View is running, it will notify you of 
Friends Online, e-mail and software updates.  You will not be notified of 
these events when MSN Quick View is asleep.  

MSN Quick View's sleep timer is set by 
the Idle Disconnect value in your Internet browser properties.

To change your sleep timer settings:
1. Click the MSN Quick View icon.
2. Click MSN Options, then Internet Properties.
3. Click the Connection Tab, then click the Connect to the Internet 
   using a modem check box to enable the Settings button.
4. Click the Settings button and then choose a value for Disconnect 
   if idle for ____ minutes.  
5. Click OK and then reselect Connect to the Internet using a local 
   area network.
6. Click OK again to accept these settings.


MSN QUICK VIEW BEHAVIOR WHEN CONNECTING WITH DIAL UP 
NETWORKING OR PROPRIETARY DIALER:
The MSN dialer starts MSN Quick View once a successful 
connection has been made, and it turns it off once the modem 
disconnects.  While MSN Quick View is running, it will provide 
intermittent notice of e-mail and friends online status, and it 
will estimate how long you have been connected.  

If you use a proprietary dialer (like AOL), or you start your 
connection by clicking a Dial-Up Networking icon, then MSN 
Quick View will only start when you visit a page that uses MSN 
Quick View's services.  MSN Quick View cannot detect the end of a 
dial-up connection started by another service and may still be 
active after you have disconnected.  MSN Quick View will detect 
that you are configured to connect via non-MSN connection and 
start a "sleep" timer which will count down and put MSN Quick 
View to sleep.  To change the interval used to put MSN to sleep, 
refer to the instructions for changing the sleep timer interval 
in the LAN connection section above.


7. Outlook Express Mail and News
================================
UPGRADING TO MICROSOFT OUTLOOK EXPRESS FROM MICROSOFT EXCHANGE 
("INBOX"), OUTLOOK, OR WINDOWS MESSAGING:
MSN 2.51 installs a new Internet e-mail program called 
Microsoft Outlook Express. If you have an existing MSN e-mail 
account (Microsoft Exchange), MSN Setup will give you
the option of importing your existing mail file to this new program. 

If you choose to upgrade (recommended), MSN 2.51 will replace your 
previous mail account with a new MSN Internet mail account, and you 
will no longer be able to use Exchange, Outlook, or Windows Messaging 
as your MSN e-mail program.

If you have MSN installed on another computer and you want to be 
able to access your MSN e-mail account on that computer, you'll have 
to install MSN 2.51 and Microsoft Outlook Express there as well.


CHANGES IN EXISTING MSN E-MAIL ACCOUNT ADDRESSES:
You may note, as you receive replies to the messages you send, that 
your e-mail address is listed as MSN_Member_ID@email.msn.com, instead
of MSN_Member_ID@msn.com.  This DOES NOT mean that your e-mail 
address has changed. The addition of the word "email" after the "@" 
sign is simply a behind-the-scenes mechanism used to ensure higher 
levels of performance on the new MSN mail platform. Your e-mail 
address is the same as before the upgrade.

8.  Connection Problems
=======================
COMPUSERVE USERS WHO INSTALL MSN 2.5
WinCim 2.0 and above should work fine after installing MSN 2.5.  If 
you encounter problems with your connection to Compuserve you should 
install the Dial-Up Networking/Winsock upgrade (COMMUPDT.EXE).  See 
the instructions for installing COMMUPDT below.  Installing a new version 
of Dial-Up Networking will enable Compuserve to work.  If this fails to 
correct the problem, you should re-install Compuserve.

If you want to access both MSN and Compuserve at the same time you 
will need to configure your Compuserve connection to use MSN's 
network.  You will then need to connect to MSN and then access Compuserve.

AOL USERS WHO INSTALL MSN 2.5
AOL 3.0 should work fine when you install MSN.  In order to use both MSN 
and AOL at the same time you will need to disable autodial functionality 
before you connecto to MSN.  Perform the following setups to
turn off Autodial:

1. Click on the MSN Quick View icon in the system tray and 
   select MSN Options, then Connection Settings.  
2. Click the options tab.
3. Uncheck the option for "Use this service for all dial-up Internet access."  

You then need to configure AOL to use TCP/IP access. Complete the following 
steps:

1. Click on Setup at the AOL login screen
2. Select Edit Location 
3. Choose TCP/IP for the type of network.  

You can then use both MSN and AOL by starting your connection 
through MSN first and then starting AOL.


AT&T WORLDNET USERS WHO INSTALL MSN 2.51:
AT&T Worldnet should work fine after installing MSN 
2.51. If there are any problems getting connected to AT&T 
Worldnet or using AT&T Worldnet to access the Internet 
check the "Connection Configuration of MSN" section for 
instructions on how to manually configure your Internet 
connection.  If you are unable to fix the problem manually, 
then you should re-install AT&T Worldnet to reset your 
connection configuration.

A new version of Microsoft Dial-Up Networking and Winsock is included on the 
MSN Setup CD.  MSN will work better with AT&T if you install this newer version.
To do so follow the instructions below for installing the COMMUPDT package.

PRODIGY USERS WHO INSTALL MSN 2.51:
Users of Prodigy may find that the Prodigy Internet browser does not work after 
installing the MSN 2.51.  This is because MSN 2.51 installs the latest version of 
Internet Explorer (4.0), which includes new security features that conflict 
with the Prodigy browser.  You will need to uninstall Internet Explorer 4.0
from your machine and then reinstall Internet Explorer 4.0 from the Internet.  
This will allow both MSN 2.51 and Prodigy to be used on the same PC.

A new version of Microsoft Dial-Up Networking and Winsock is included 
on the MSN Setup CD.  MSN will work better with Prodigy if you install this 
newer version.  To do so follow the below for installing the COMMUPDT package.

INSTALLING THE COMMUPDT (DIAL-UP NETWORKING/WINSOCK UPGRADE) PACKAGE:
To install the latest version of Microsoft Dial-Up Networking 1.2b and 
Winsock 2.0, complete the following steps:

1. Put the MSN 2.51 Setup CD in your CD-ROM drive. 
   The MSN Setup screen will appear.
2. Click the Browse the MSN CD button.  
   Note: If you have a real mode CD-ROM drive, the MSN CD Autorun will fail.
   In that case, you will need to double-click the My Computer icon on your desktop 
   and select the CD-ROM drive icon from the My Computer Folder.
3. Open the MSNSetup folder.
4. Open the Compnts folder.
5. Double-click the file named "COMMUPDT.EXE" to begin the installation.

Installation Notes:
If you get a Version Conflict dialog box, choose to keep the latest version
of the file in question. 

The installation process requires that you restart your computer twice. 

After completion, you can continue to use MSN normally with the
following benefits:
1. Multicast stream can be turned off without requiring that you hang up 
   the modem.
2. Connections started from Dial-Up Networking will put
   MSN Quick View to sleep upon disconnect.
3. Enhanced support for modems and improved Internet performance.


CONNECTION CONFIGURATION OF MSN:
To reconfigure any of the connection settings in the following chart, 
first:
1. Click the Windows Start button, then click Settings, Control Panel.
2. Double-click the "Internet" icon.
3. Click the Connection Tab.

DESIRED CONNECTION	SETTINGS IN INTERNET PROPERTIES
CONFIGURATION		CONNECTION TAB
-----------------------------------------------------------------
Dial Up Using MSN	In the Connection section, check the 
			"Connect to the Internet using a modem" 
			option. Click the Settings 
			button and make sure that "MSN" is the
			highlighted connection.  Make sure that
			"Connect using a proxy server" is 
			unchecked.

Dial Up Using 		In the Connection section, check the
other RAS Service	"Connect to the Internet using a modem" option.
(eg. MCI, AT&T)		Click the Settings button.  Select the service 
			you want to use. (If the service you use 
			is not listed, see the next topic about 
			proprietary ISPs.)  Make sure that
			"Connect using a proxy server" is 
			unchecked.

Dial Up Using 		In the Connection section, check the
Proprietary ISP		"Connect to the Internet using a modem" option. 
(e.g., AOL, Netscape)	Click the Settings button.  If your service does not 
			appear in the drop-down list, then click
			the Add button and follow the steps to
			create a connection for your service.
			Make sure that "Connect using a proxy 
			server" is unchecked.

Direct Connection	In the Connection section, check the   
to the Internet	or,	"Access the Internet via a Local Area  
Remote Winsock Proxy	Network" option and make sure that
Connection via LAN	"Connect using a proxy server" is 
			unchecked. Note: Only Remote Winsock Proxy 2.0
			or later is supported.

LAN Proxy Connection	You can configure IE or MSN to 
(cannot access 		use LAN Proxy by checking the
 MSN via proxy until	"Connect through proxy" box in 
 Q4 1997)		the Proxy Server section.  

MODEM ACCESS WITH WINSOCK PROXY (WSP):  
If you have Remote Winsock Proxy installed on your computer 
and would like to access MSN 2.51 with a modem,
you will need to turn off Remote Winsock Access.  

To turn off Remote Winsock Access:
1. Click the Windows Start button, then click Settings, Control Panel.
2. Double-click the "WSP Client" icon.
3. Uncheck the "Enable WinSock Proxy Client."

Additionally, you will need to uncheck the Proxy server in your Internet
Explorer Connection Properties, as described above. 

WHICH CONNECTION CHOICE TO SELECT
This 2.51 version of MSN ships with a new dial-up 
connection manager that replaces the dial-up manager from 
previous versions of MSN. The new dial-up connection 
manager creates an entry in your Dial-up Networking folder 
called "MSN" but does not delete your old entries, "The 
Microsoft Network" and "The Microsoft Network (backup)." 
Either of these old entries will still work with the new MSN 
dial-up connection manager, but they will disable the autodial 
support for IE and Mail.  So when you access dial-up networking 
within either Outlook Express Mail, Exchange Mail, or Chat,
you will be presented with all three choices for connection 
to MSN.  You should select the connection entry "MSN" for 
all dial-up access to MSN.

9. Removing MSN Files and Shortcuts
====================================
For complete details on removing the MSN 2.51 files and shortcuts from 
your computer, see the Uninstal.txt file.

For the most current information about MSN, always check online at
http://memberservices.msn.com.

