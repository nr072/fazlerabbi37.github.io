Install KDE Connect in Ubuntu 18.04
===================================
Installing KDE Connect in Ubuntu 18.04 LTS.

What is KDE Connect?
`Answer from KDE community Wiki <https://community.kde.org/KDEConnect#What_is_KDE_Connect.3F>`_ :

KDE Connect is a project to communicate across all your devices. For example, with KDE Connect you can receive your phone notifications on your desktop computer, control music playing on your desktop from your phone, or use your phone as a remote control for your desktop. To achieve this, KDE Connect:

* Implements a secure communication protocol over the network, and allows any developer to create plugins on top of it.
* Has a component that you install on your desktop.
* Has a KDE Connect client app you run on your phone.

This YouTube `video <https://www.youtube.com/watch?v=KkCFngNmsh0>`_ from 2013 demonstrates some other cool features.

I have been using KDE Connect for a while now. It is very useful for sending files from PC to Android and vice versa but I have found it most useful while copying text in PC and pasting it on the Phone. 

On Ubuntu 18.04 LTS we can install KDE Connect using the following command::

    sudo apt install kdeconnect

We need to install the KDE Connect app on Android using `F-Droid <https://f-droid.org/en/packages/org.kde.kdeconnect_tp>`_ or `Google Play <https://play.google.com/store/apps/details?id=org.kde.kdeconnect_tp>`_.

Coming back to PC, we will search for KDE and we should see two app with same icon one named ``KDE Connect Indicator`` and another ``KDE Connect Settings``. Click on ``KDE Connect Settings`` and refresh the list. Now we should see the Android phone with KDE Connect installed on it. After paring it we are ready to go.
