
   1
   2
   3
   4
   5
   6
   7
   8
   9
  10
  11
  12
  13
  14
  15
  16
  17
  18
  19
  20
  21
  22
  23
  24
  25
  26
  27
  28
  29
  30
  31
  32
  33
  34
  35
  36
  37
  38
  39
  40
  41
  42
  43
  44
  45
  46
  47
  48
  49
  50
  51
  52
  53
  54
  55
  56
  57
  58
  59
  60
  61
  62
  63
  64
  65
  66
  67
  68
  69
  70
  71
  72
  73
  74
  75
  76
  77
  78
  79
  80
  81
  82
  83
  84
  85
  86
  87
  88
  89
  90
  91
  92
  93
  94
  95
  96
  97
  98
  99
 100
 101
 102
 103
 104
 105
 106
 107
 108
 109
 110
 111
 112
 113
 114
 115
 116
 117
 118
 119
 120
 121
 122
 123
 124
 125
 126
 127
 128
 129
 130
 131
 132
 133
 134
 135
 136
 137
 138
 139
 140
 141
 142
 143
 144
 145
 146
 147
 148
 149
 150
 151
 152
 153
 154
 155
 156
 157
 158
 159
 160
 161
 162
 163
 164
 165
 166
 167
 168
 169
 170
 171
 172
 173
 174
 175
 176
 177
 178
 179
 180
 181
 182
 183
 184
 185
 186
 187
 188
 189
 190
 191
 192
 193
 194
 195
 196
 197
 198
 199
 200
 201
 202
 203
 204
 205
 206
 207
 208
 209
 210
 211
 212
 213
 214
 215
 216
 217
 218
 219
 220
 221
 222
 223
 224
 225
 226
 227
 228
 229
 230
 231
 232
 233
 234
 235
 236
 237
 238
 239
 240
 241
 242
 243
 244
 245
 246
 247
 248
 249
 250
 251
 252
 253
 254
 255
 256
 257
 258
 259
 260
 261
 262
 263
 264
 265
 266
 267
 268
 269
 270
 271
 272
 273
 274
 275
 276
 277
 278
 279
 280
 281
 282
 283
 284
 285
 286
 287
 288
 289
 290
 291
 292
 293
 294
 295
 296
 297
 298
 299
 300
 301
 302
 303
 304
 305
 306
 307
 308
 309
 310
 311
 312
 313
 314
 315
 316
 317
 318
 319
 320
 321
 322
 323
 324
 325
 326
 327
 328
 329
 330
 331
 332
 333
 334
 335
 336
 337
 338
 339
 340
 341
 342
 343
 344
 345
 346
 347
 348
 349
 350
 351
 352
 353
 354
 355
 356
 357
 358
 359
 360
 361
 362
 363
 364
 365
 366
 367
 368
 369
 370
 371
 372
 373
 374
 375
 376
 377
 378
 379
 380
 381
 382
 383
 384
 385
 386
 387
 388
 389
 390
 391
 392
 393
 394
 395
 396
 397
 398
 399
 400
 401
 402
 403
 404
 405
 406
 407
 408
 409
 410
 411
 412
 413
 414
 415
 416
 417
 418
 419
 420
 421
 422
 423
 424
 425
 426
 427
 428
 429
 430
 431
 432
 433
 434
 435
 436
 437
 438
 439
 440
 441
 442
 443
 444
 445
 446
 447
 448
 449
 450
 451
 452
 453
 454
 455
 456
 457
 458
 459
 460
 461
 462
 463
 464
 465
 466
 467
 468
 469
 470
 471
 472
 473
 474
 475
 476
 477
 478
 479
 480
 481
 482
 483
 484
 485
 486
 487
 488
 489
 490
 491
 492
 493
 494
 495
 496
 497
 498
 499
 500
 501
 502
 503
 504
 505
 506
 507
 508
 509
 510
 511
 512
 513
 514
 515
 516
 517
 518
 519
 520
 521
 522
 523
 524
 525
 526
 527
 528
 529
 530
 531
 532
 533
 534
 535
 536
 537
 538
 539
 540
 541
 542
 543
 544
 545
 546
 547
 548
 549
 550
 551
 552
 553
 554
 555
 556
 557
 558
 559
 560
 561
 562
 563
 564
 565
 566
 567
 568
 569
 570
 571
 572
 573
 574
 575
 576
 577
 578
 579
 580
 581
 582
 583
 584
 585
 586
 587
 588
 589
 590
 591
 592
 593
 594
 595
 596
 597
 598
 599
 600
 601
 602
 603
 604
 605
 606
 607
 608
 609
 610
 611
 612
 613
 614
 615
 616
 617
 618
 619
 620
 621
 622
 623
 624
 625
 626
 627
 628
 629
 630
 631
 632
 633
 634
 635
 636
 637
 638
 639
 640
 641
 642
 643
 644
 645
 646
 647
 648
 649
 650
 651
 652
 653
 654
 655
 656
 657
 658
 659
 660
 661
 662
 663
 664
 665
 666
 667
 668
 669
 670
 671
 672
 673
 674
 675
 676
 677
 678
 679
 680
 681
 682
 683
 684
 685
 686
 687
 688
 689
 690
 691
 692
 693
 694
 695
 696
 697
 698
 699
 700
 701
 702
 703
 704
 705
 706
 707
 708
 709
 710
 711
 712
 713
 714
 715
 716
 717
 718
 719
 720
 721
 722
 723
 724
 725
 726
 727
 728
 729
 730
 731
 732
 733
 734
 735
 736
 737
 738
 739
 740
 741
 742
 743
 744
 745
 746
 747
 748
 749
 750
 751
 752
 753
 754
 755
 756
 757
 758
 759
 760
 761
 762
 763
 764
 765
 766
 767
 768
 769
 770
 771
 772
 773
 774
 775
 776
 777
 778
 779
 780
 781
 782
 783
 784
 785
 786
 787
 788
 789
 790
 791
 792
 793
 794
 795
 796
 797
 798
 799
 800
 801
 802
 803
 804
 805
 806
 807
 808
 809
 810
 811
 812
 813
 814
 815
 816
 817
 818
 819
 820
 821
 822
 823
 824
 825
 826
 827
 828
 829
 830
 831
 832
 833
 834
 835
 836
 837
 838
 839
 840
 841
 842
 843
 844
 845
 846
 847
 848
 849
 850
 851
 852
 853
 854
 855
 856
 857
 858
 859
 860
 861
 862
 863
 864
 865
 866
 867
 868
 869
 870
 871
 872
 873
 874
 875
 876
 877
 878
 879
 880
 881
 882
 883
 884
 885
 886
 887
 888
 889
 890
 891
 892
 893
 894
 895
 896
 897
 898
 899
 900
 901
 902
 903
 904
 905
 906
 907
 908
 909
 910
 911
 912
 913
 914
 915
 916
 917
 918
 919
 920
 921
 922
 923
 924
 925
 926
 927
 928
 929
 930
 931
 932
 933
 934
 935
 936
 937
 938
 939
 940
 941
 942
 943
 944
 945
 946
 947
 948
 949
 950
 951
 952
 953
 954
 955
 956
 957
 958
 959
 960
 961
 962
 963
 964
 965
 966
 967
 968
 969
 970
 971
 972
 973
 974
 975
 976
 977
 978
 979
 980
 981
 982
 983
 984
 985
 986
 987
 988
 989
 990
 991
 992
 993
 994
 995
 996
 997
 998
 999
1000
1001
1002
1003
1004
1005
1006
1007
1008
1009
1010
1011
1012
1013
1014
1015
1016
1017
1018
1019
1020
1021
1022
1023
1024
1025
1026
1027
1028
1029
1030
1031
1032
1033
1034
1035
1036
1037
1038
1039
1040
1041
1042
1043
1044
1045
1046
1047
1048
1049
1050
1051
1052
1053
1054
1055
1056
1057
1058
1059
1060
1061
1062
1063
1064
1065
1066
1067
1068
1069
1070
1071
1072
1073
1074
1075
1076
1077
1078
1079
1080
1081
1082
1083
1084
1085
1086
1087
1088
1089
1090
1091
1092
1093
1094
1095
1096
1097
1098
1099
1100
1101
1102
1103
1104
1105
1106
1107
1108
1109
1110
1111
1112
1113
1114
1115
1116
1117
1118
1119
1120
1121
1122
1123
1124
1125
1126
1127
1128
1129
1130
1131
1132
1133
1134
1135
1136
1137
1138
1139
1140
1141
1142
1143
1144
1145
1146
1147
1148
1149
1150
1151
1152
1153
1154
1155
1156
1157
1158
1159
1160
1161
1162
1163
1164
1165
1166
1167
1168
1169
1170
1171
1172
1173
1174
1175
1176
1177
1178
1179
1180
1181
1182
1183
1184
1185
1186
1187
1188
1189
1190
1191
1192
1193
1194
1195
1196
1197
1198
1199
1200
1201
1202
1203
1204
1205
1206
1207
1208
1209
1210
1211
1212
1213
1214
1215
1216
1217
1218
1219
1220
1221
1222
1223
1224
1225
1226
1227
1228
1229
1230
1231
1232
1233
1234
1235
1236
1237
1238
1239
1240
1241
1242
1243
1244
1245
1246
1247
1248
1249
1250
1251
1252
1253
1254
1255
1256
1257
1258
1259
1260
1261
1262
1263
1264
1265
1266
1267
1268
1269
1270
1271
1272
1273
1274
1275
1276
1277
1278
1279
1280
1281
1282
1283
1284
1285
1286
1287
1288
1289
1290
1291
1292
1293
1294
1295
1296
1297
1298
1299
1300
1301
1302
1303
1304
1305
1306
1307
1308
1309
1310
1311
1312
1313
1314
1315
1316
1317
1318
1319
1320
1321
1322
1323
1324
1325
1326
1327
1328
1329
1330
1331
1332
1333
1334
1335
1336
1337
1338
1339
1340
1341
1342
1343
1344
1345
1346
1347
1348
1349
1350
1351
1352
1353
1354
1355
1356
1357
1358
1359
1360
1361
1362
1363
1364
1365
1366
1367
1368
1369
1370
1371
1372
1373
1374
1375
1376
1377
1378
1379
1380
1381
1382
1383
1384
1385
1386
1387
1388
1389
1390
1391
1392
1393
1394
1395
1396
1397
1398
1399
1400
1401
1402
1403
1404
1405
1406
1407
1408
1409
1410
1411
1412
1413
1414
1415
1416
1417
1418
1419
1420
1421
1422
1423
1424
1425
1426
1427
1428
1429
1430
1431
1432
1433
1434
1435
1436
1437
1438
1439
1440
1441
1442
1443
1444
1445
1446
1447
1448
1449
1450
1451
1452
1453
1454
1455
1456
1457
1458
1459
1460
1461
1462
1463
1464
1465
1466
1467
1468
1469
1470
1471
1472
1473
1474
1475
1476
1477
1478
1479
1480
1481
1482
1483
1484
1485
1486
1487
1488
1489
1490
1491
1492
1493
1494
1495
1496
1497
1498
1499
1500
1501
1502
1503
1504
1505
1506
1507
1508
1509
1510
1511
1512
1513
1514
1515
1516
1517
1518
1519
1520
1521
1522
1523
1524
1525
1526
1527
1528
1529
1530
1531
1532
1533
1534
1535
1536
1537
1538
1539
1540
1541
1542
1543
1544
1545
1546
1547
1548
1549
1550
1551
1552
1553
1554
1555
1556
1557
1558
1559
1560
1561
1562
1563
1564
1565
1566
1567
1568
1569
1570
1571
1572
1573
1574
1575
1576
1577
1578
1579
1580
1581
1582
1583
1584
1585
1586
1587
1588
1589
1590
1591
1592
1593
1594
1595
1596
1597
1598
1599
1600
1601
1602
1603
1604
1605
1606
1607
1608
1609
1610
1611
1612
1613
1614
1615
1616
1617
1618
1619
1620
1621
1622
1623
//==============================================================================================================
//--------------------------------------------------------------------------------------------------------------
// *** MUSHROOMCAKE28'S  MENU ITEM COLLECTOR
//  * Author: MushroomCake28
//  * Contact: last.truong@hotmail.com
//  * Version: 1.04 (2017-07-11) 
//  * File Name: $MUSH_MenuItemCollector_P1.js
//--------------------------------------------------------------------------------------------------------------
// * INFO :  This script creates a new menu for the item collector scene. It can be accessed from menu if you
//           decide so (in the parameters) and will offer the possibility to keep track of how many items 
//           where collected and how many chests aren't opened yet.
// * TERMS : This script is part of the MushroomCake Public first generation scripts. It can be used by anyone
//           for free and commercials games without requesting my permission. You just need to credit me
//           (MushroomCake28), and please be generous if I request a copy of your game ;) 
// * USAGE : Save as a javascript file (.js at the end) if it's not already a js file and insert it anywhere
//           in the plugin manager. Use the file name at the top of the script. 
//--------------------------------------------------------------------------------------------------------------
// INFORMATION ON FUNCTIONALITY
// * This script will be referred as 'MIT' in the code.
// * Plugin Commands:
//   - ItemCollector open
//   - ItemCollector remove [type] [id]
//   - ItemCollector add [type] [id]
//--------------------------------------------------------------------------------------------------------------
// UPDATES HISTORY
// * v.1.01: finished (2017-05-01)
// * v.1.02: finished (2017-05-10)
//   - added compatibility with YEP Item Core
//   - added auto updater (no need to hard reset anymore)
// * v.1.03: finished (2017-07-11)
//   - added plugin command for conditions
// * v.1.04: finished (????)
//   - added some YEP features (image and stuff)
// * v.1.05: finished (2019/06/16)
//   - Fixed a bug where YEP images would still display on locked items.
//   - Fixed a bug where the YEP images zoom process would be displayed on screen.
//--------------------------------------------------------------------------------------------------------------
// SECTIONS
// * Section 1: Scenes
//   - 1.0 : Scene Menu (adding the command)
//   - 1.1 : Scene Menu ItemCollector
// * Section 2: Windows
//   - 2.0 : Window MenuCommand
//   - 2.1 : Window Collector Command
//   - 2.2 : Window Collector Sections 
//   - 2.3 : Window Collector Info
//   - 2.4 : Window Collector Plus
// * Section 3: Game Objects
//   - 3.0 : Game Party
//   - 3.1 : Game Interpreter
//==============================================================================================================
// *** PLUGIN PARAMETERS
/*:
*
* @plugindesc [v.1.05] Creates a Menu Item Collector
* @author MushroomCake28
* @help 
*
* MushroomCake28's ItemCollector plugin [v.1.05]
*
* This plugins creates an item collector menu scene that can be accessible from 
* the menu. Just install the plugin for it to work. You can restrict the scene's
* accessibility with a Game Switch of your choice (indicate the switch Id in the
* parameters, set to 0 if you don't want to restrict the scene at all).
*
* You can use plugin commands for additional stuffs:
* - ItemCollector open : opens the scene ItemCollector
* - ItemCollector add [type] [id] : make it so a particular item is considered 
*   seen by the game. Set the type to 'items', 'weapons' or 'armors' (without the
*   apostrophes) for the object category and set the id.
*   example: ItemCollector add items 2  ** This will add the item with the Id 2.
* - ItemCollector remove [type] [id] : make it so a particular item is considered not 
*   seen by the game. Same arguments as the the add command.
* - ItemCollector getCompletion [category] [variable id]: (Only in v.1.03 and up).
*   Get the completion of the item collector. It will return a value between 0 and
*   100, 100 being completed 100%. The value will be stored in a defined variable.
*   Example: ItemColelctor getCompletion armors 5 ** this will store the completion
*   of the armors section in the game variable 5. 
*   Note: possible categories are: all, items, armors, weapons. (you must write them
*   exactly like that, or else it won't work).
*
*   More information on that plugin command at this link:
*   https://www.youtube.com/watch?v=I43rCV8HdTk&feature=youtu.be 
*
* If you don't want the game to display the chest completion (because for example
* you don't want to count 200+ chests in your game), set the 'Chest Total' 
* parameter to 0, or set the 'Chest Variable' to 0.
*
* When still in the game making process, you might sometimes modify the items in
* the database or change excluded items from the item collector list. If you turn
* the 'Auto Update' parameter ON (set it to true), it will automatically update
* the saved item collector list in game. If only minor changes have been made 
* (only changed excluded items), it will simply update the list while keeping the
* saved items. Bigger changes will result in a item collector list wipe and will
* create a new list. You can still Hard reset as you please.
*
* For the 'Hard Reset' parameter, it is a parameter designed for the game builder
* and testing. Set it to false before publishing your game. The parameter resets 
* the Item Collector saves in game. Since the Item Collector Data is initialized
* when starting a game, it is impossible to change data such as adding/removing
* items or equips from the database and adding/removing excluded items or equips.
* If you still want to continue testing without having to do a new game, follow
* these steps:
* 1) Set the parameter 'Hard Reset' to true and save.
* 2) Start the game and load your save file.
* 3) Enter the ItemCollector scene. Everything should have been reset.
* 4) Exit the menu and save. Then Quit the game.
* 5) Set the parameter 'Hard Reset' to false and save.
*
* UPDATE 1.04:
*
* Added some compatibility features for Yanfly's Item Picture Image plugin. The
* item's image (from the picture folder) can now be displayed in the Item
* Collector. Check the Yanfly Seciton in this plugins' parameters to decide
* wether or not to scale the image to fit the Item Collector's window perfectly.
*
* Added some compatibility features for Yanfly's Equip Core plugin. The equip's
* stats from the lunatic mode can now be displayed in the item collector. Check 
* the Yanfly section in this plugin's parameters to decide wether or not to show
* these stats in the Item Collector.
*
* For more information, visit my website or my youtube channel. I explain how the
* to use the plugin properly on youtube.
*
* UPDATE 1.05:
*
* Fixed the bug where the YEP image didn't disappear when moving the cursor from
* an item using a YEP image to a locked item. 
*
* Fixed the bug where the YEP image zoom process was displayed on screen. From
* now on, the image will appear after its zoom is set.
*
* youtube: https://www.youtube.com/watch?v=5WdgXBhhf6A
* website: https://www.kamostudiogroup.com/
* forum thread: https://forums.rpgmakerweb.com/index.php?threads/mush-plugins-item-collector-menu.78248/
*
* @param ---------------------
* @desc 
* @default
*
* @param * TESTING
* @desc 
* @default
*
* @param ---------------------
* @desc 
* @default
*
* @param Auto Update
* @desc See the plugin's help section for this parameter.
* @default true
*
* @param Hard Reset
* @desc See the plugin's help section for this parameter.
* @default false
*
* @param ---------------------
* @desc 
* @default
*
* @param * GENERAL
* @desc 
* @default
*
* @param ---------------------
* @desc 
* @default
*
* @param In Menu
* @desc Set the command to true if you want to add a command to access the item collector from the menu.
* @default true
*
* @param Item Collector Switch
* @desc Set the switch. When off, the item collector won't be available. 0 or nothing = no switch.
* @default 0
*
* @param Menu Command
* @desc Set command that will appear in the menu
* @default Item Collector
*
* @param Excluded Items
* @desc Set the index of all the items that will be excluded from the item collector. Syntax: [item1, item2, etc.]
* @default []
*
* @param Excluded Weapons
* @desc Set the index of all the weapons that will be excluded from the item collector. Syntax: [item1, item2, etc.]
* @default []
*
* @param Excluded Armors
* @desc Set the index of all the armors that will be excluded from the item collector. Syntax: [item1, item2, etc.]
* @default []
*
* @param Chest Variable
* @desc Set the variable that will count chest openings. 0 or nothing will not keep track of chests.
* @default 0
*
* @param Chest Total
* @desc The number of chests in the game. 0 will not keep track of chests.
* @default 0
*
* @param ---------------------
* @desc 
* @default
*
* @param * SECTIONS
* @desc 
* @default
*
* @param ---------------------
* @desc 
* @default
*
* @param Section Includes
* @desc [regular, key, hidden a, hidden b, weapon, armor]. Set to true if you want the section.
* @default [true, true, true, true, true, true]
*
* @param Section All
* @desc Set the section name for 'all items'
* @default All
*
* @param Section Regular Item
* @desc Set the section name for 'regular items'
* @default Consumables
*
* @param Section Key Item
* @desc Set the section name for 'key items'
* @default Key Items
*
* @param Section Hidden Item A
* @desc Set the section name for 'hidden items A'
* @default Hidden A
*
* @param Section Hidden Item B
* @desc Set the section name for 'hidden items B'
* @default Hidden B
*
* @param Section Weapon
* @desc Set the section name for 'weapons'
* @default Weapons
*
* @param Section Armor
* @desc Set the section name for 'armors'
* @default Armors
*
* @param ---------------------
* @desc 
* @default
*
* @param * INFO WINDOW 
* @desc 
* @default
*
* @param ---------------------
* @desc 
* @default
*
* @param Text Id
* @desc Set the text for the item's Id.
* @default Id
*
* @param Text Own
* @desc Set the text for the number of times the party owns the item.
* @default Own
*
* @param Text Price
* @desc Set the text for the item's price.
* @default Price
*
* @param Text Type
* @desc Set the text for the item's type.
* @default Type
*
* @param Text Hp Recover +
* @desc Set the text for the Hp recovery + part.
* @default Hp heal +
*
* @param Text Hp Recover %
* @desc Set the text for the Hp recovery % part.
* @default Hp heal %
*
* @param Text Mp Recover +
* @desc Set the text for the Mp recovery + part.
* @default Mp heal +
*
* @param Text Mp Recover %
* @desc Set the text for the Mp recovery % part.
* @default Mp heal %
*
* @param Text Tp Gain
* @desc Set the text for the Tp gain part.
* @default Tp gain
*
* @param Text Add State
* @desc Set the text for the Add state part.
* @default Add states
*
* @param Text Remove State
* @desc Set the text for the Add state part.
* @default Remove states
*
* @param ---------------------
* @desc 
* @default
*
* @param * COMPLETION WINDOW
* @desc 
* @default
*
* @param ---------------------
* @desc 
* @default
*
* @param Text Completion
* @desc Set the text for the completion part.
* @default Completion
*
* @param Text Chest
* @desc Set the text for the chest part.
* @default Chest
*
* @param Chest Bar Color 1
* @desc Set the color 1 for the bar in the chest completion part.
* @default 'rgba(0, 128, 128, 1)'
*
* @param Chest Bar Color 2
* @desc Set the color 2 for the bar in the chest completion part.
* @default 'rgba(128, 0, 128, 1)'
*
* @param Section Bar Color 1
* @desc Set the color 1 for the bar in the section completion part.
* @default 'rgba(0, 128, 128, 1)'
*
* @param Section Bar Color 2
* @desc Set the color 2 for the bar in the section completion part.
* @default 'rgba(128, 0, 128, 1)'
*
* @param ---------------------
* @desc 
* @default
*
* @param * PARAMETERS AND ELEMENTS
* @desc 
* @default
*
* @param ---------------------
* @desc 
* @default
*
* @param Parameters Icons
* @desc Set the icon for the parameters. Set to -1 if you don't want icons. 
* Syntax: [hp, mp, atk, def, mat, mdf, agi, luk]
* @default [32, 33, 34, 35, 36, 37, 38, 39]
*
* @param Parameters Text
* @desc Set the text for each parameters. Syntax: [hp, mp, atk, def, mat, mdf, agi, luk]
* @default ["Mhp", "Mmp", "Atk", "Def", "Mat", "Mdf", "Agi", "Luk"]
*
* @param Parameters Back Color
* @desc Set the color for the parameter background. 
* Syntax: rgba(red, green, blue, alpha)
* @default rgba(48, 48, 48, 0.9)
*
* @param Element Icons
* @desc Set the icon for the elements. Set to -1 if you don't want icons. 
* Syntax: [element 1, element 2, etc.]
* @default [77, 64, 65, 66, 67, 68, 69, 70, 71]
*
* @param Element Weak Text
* @desc Set the text for the element weak info.
* @default Elemental weakness
*
* @param Element Resist Text
* @desc Set the text for the element resist info.
* @default Elemental resist
*
* @param Parameters Bar
* @desc Set to true if you want some bars for each parameters.
* @default true
*
* @param Parameters BarColor MHP
* @desc Set the color for the mhp bar.
* Syntax: 'rgba(red, green, blue, alpha)'
* @default 'rgba(0, 255, 128, 1)'
*
* @param Parameters BarColor MMP
* @desc Set the color for the mmp bar.
* Syntax: 'rgba(red, green, blue, alpha)'
* @default 'rgba(0, 255, 128, 1)'
*
* @param Parameters BarColor ATK
* @desc Set the color for the atk bar.
* Syntax: 'rgba(red, green, blue, alpha)'
* @default 'rgba(0, 255, 128, 1)'
*
* @param Parameters BarColor DEF
* @desc Set the color for the def bar.
* Syntax: 'rgba(red, green, blue, alpha)'
* @default 'rgba(0, 255, 128, 1)'
*
* @param Parameters BarColor MAT
* @desc Set the color for the mat bar.
* Syntax: 'rgba(red, green, blue, alpha)'
* @default 'rgba(0, 255, 128, 1)'
*
* @param Parameters BarColor MDF
* @desc Set the color for the mdf bar.
* Syntax: 'rgba(red, green, blue, alpha)'
* @default 'rgba(0, 255, 128, 1)'
*
* @param Parameters BarColor AGI
* @desc Set the color for the agi bar.
* Syntax: 'rgba(red, green, blue, alpha)'
* @default 'rgba(0, 255, 128, 1)'
*
* @param Parameters BarColor LUK
* @desc Set the color for the luk bar.
* Syntax: 'rgba(red, green, blue, alpha)'
* @default 'rgba(0, 255, 128, 1)'
*
* @param ---------------------
* @desc 
* @default
*
* @param * YANFLY SECTION
* @desc 
* @default
*
* @param ---------------------
* @desc 
* @default
*
* @param YEP Equip Core Lunatic Factor
* @desc If true, and if the YEP_EquipCore plugin is present, it take the lunatic mode stat into account.
* @default true
*
* @param YEP Item Picture Scale
* @desc If true, and if the YEP_ItemPictureImg plugin is present, it will scale the picture to 128x128 to fit perfectly.
* @default true
*
*/
//==============================================================================================================

var Imported = Imported || {};
Imported.mushFeatures = Imported.mushFeatures || {}; 
Imported.mushFeatures['MenuItemCollector_P1'] = 1.02;

var $mushFeatures = $mushFeatures || { 'imported': {}, 'params': {} };
$mushFeatures.imported['MenuItemCollector_P1'] = 1.02;

var nowParameters = PluginManager.parameters('$MUSH_MenuItemCollector_P1');

$mushFeatures.params['MIT_AutoUpdate']       = eval(nowParameters['Auto Update']);
$mushFeatures.params['MIT_HardReset']        = eval(nowParameters['Hard Reset']);

$mushFeatures.params['MIT_InMenu']           = eval(nowParameters['In Menu']);
$mushFeatures.params['MIT_Switch']           = Number(nowParameters['Item Collector Switch']);
$mushFeatures.params['MIT_MenuCommand']      = String(nowParameters['Menu Command']);
$mushFeatures.params['MIT_ExcludedItems']    = eval(nowParameters['Excluded Items']);
$mushFeatures.params['MIT_ExcludedWeapons']  = eval(nowParameters['Excluded Weapons']);
$mushFeatures.params['MIT_ExcludedArmors']   = eval(nowParameters['Excluded Armors']);
$mushFeatures.params['MIT_ChestVariable']    = Number(nowParameters['Chest Variable']);
$mushFeatures.params['MIT_ChestTotal']       = Number(nowParameters['Chest Total']);

$mushFeatures.params['MIT_SectionIncludes']  = eval(nowParameters['Section Includes']);
$mushFeatures.params['MIT_SectionAll']       = String(nowParameters['Section All']);
$mushFeatures.params['MIT_SectionRegular']   = String(nowParameters['Section Regular Item']);
$mushFeatures.params['MIT_SectionKey']       = String(nowParameters['Section Key Item']);
$mushFeatures.params['MIT_SectionHiddenA']   = String(nowParameters['Section Hidden Item A']);
$mushFeatures.params['MIT_SectionHiddenB']   = String(nowParameters['Section Hidden Item B']);
$mushFeatures.params['MIT_SectionWeapon']    = String(nowParameters['Section Weapon']);
$mushFeatures.params['MIT_SectionArmor']     = String(nowParameters['Section Armor']);

$mushFeatures.params['MIT_TextId']           = String(nowParameters['Text Id']);
$mushFeatures.params['MIT_TextOwn']          = String(nowParameters['Text Own']);
$mushFeatures.params['MIT_TextPrice']        = String(nowParameters['Text Price']);
$mushFeatures.params['MIT_TextType']         = String(nowParameters['Text Type']);
$mushFeatures.params['MIT_TextHpRecover+']   = String(nowParameters['Text Hp Recover +']);
$mushFeatures.params['MIT_TextHpRecover%']   = String(nowParameters['Text Hp Recover %']);
$mushFeatures.params['MIT_TextMpRecover+']   = String(nowParameters['Text Mp Recover +']);
$mushFeatures.params['MIT_TextMpRecover%']   = String(nowParameters['Text Mp Recover %']);
$mushFeatures.params['MIT_TextTpGain']       = String(nowParameters['Text Tp Gain']);
$mushFeatures.params['MIT_TextAddState']     = String(nowParameters['Text Add State']);
$mushFeatures.params['MIT_TextRemoveState']  = String(nowParameters['Text Remove State']);

$mushFeatures.params['MIT_TextCompletion']   = String(nowParameters['Text Completion']);
$mushFeatures.params['MIT_TextChest']        = String(nowParameters['Text Chest']);
$mushFeatures.params['MIT_ChestBarColor1']   = eval(nowParameters['Chest Bar Color 1']);
$mushFeatures.params['MIT_ChestBarColor2']   = eval(nowParameters['Chest Bar Color 2']);
$mushFeatures.params['MIT_SectionBarColor1'] = eval(nowParameters['Section Bar Color 1']);
$mushFeatures.params['MIT_SectionBarColor2'] = eval(nowParameters['Section Bar Color 2']);

$mushFeatures.params['MIT_ParametersIcons']       = eval(nowParameters['Parameters Icons']);
$mushFeatures.params['MIT_ParametersText']        = eval(nowParameters['Parameters Text']);
$mushFeatures.params['MIT_ParametersBackColor']   = String(nowParameters['Parameters Back Color']);
$mushFeatures.params['MIT_ElementIcons']          = eval(nowParameters['Element Icons']);
$mushFeatures.params['MIT_ElementWeakText']       = String(nowParameters['Element Weak Text']);
$mushFeatures.params['MIT_ElementResistText']     = String(nowParameters['Element Resist Text']);
$mushFeatures.params['MIT_ParametersBar']         = eval(nowParameters['Parameters Bar']);
$mushFeatures.params['MIT_ParametersBarColorMHP'] = eval(nowParameters['Parameters BarColor MHP']);
$mushFeatures.params['MIT_ParametersBarColorMMP'] = eval(nowParameters['Parameters BarColor MMP']);
$mushFeatures.params['MIT_ParametersBarColorATK'] = eval(nowParameters['Parameters BarColor ATK']);
$mushFeatures.params['MIT_ParametersBarColorDEF'] = eval(nowParameters['Parameters BarColor DEF']);
$mushFeatures.params['MIT_ParametersBarColorMAT'] = eval(nowParameters['Parameters BarColor MAT']);
$mushFeatures.params['MIT_ParametersBarColorMDF'] = eval(nowParameters['Parameters BarColor MDF']);
$mushFeatures.params['MIT_ParametersBarColorAGI'] = eval(nowParameters['Parameters BarColor AGI']);
$mushFeatures.params['MIT_ParametersBarColorLUK'] = eval(nowParameters['Parameters BarColor LUK']);

$mushFeatures.params['MIT_YEP_EquipCoreLunaticFactor'] = eval(nowParameters['YEP Equip Core Lunatic Factor']);
$mushFeatures.params['MIT_YEP_ItemPictureScale']       = eval(nowParameters['YEP Item Picture Scale']);

//==============================================================================================================
// * SECTION 1.0 : Scene Menu 
//   - Adding the command
//==============================================================================================================

var aliasMush_SceneMenuCreateCommandWindow26 = Scene_Menu.prototype.createCommandWindow;
Scene_Menu.prototype.createCommandWindow = function() {
	aliasMush_SceneMenuCreateCommandWindow26.call(this);
	if ($mushFeatures.params['MIT_InMenu']) {
		var itemCollector = 'itemCollector';
		this._commandWindow.setHandler(itemCollector,    this.commandMushItemCollector.bind(this));
	}
};

Scene_Menu.prototype.commandMushItemCollector = function() {
	SceneManager.push(Scene_MenuItemCollector);
};

//==============================================================================================================
// * SECTION 1.1 : Scene Menu Item Collector
//   - Create the scene
//==============================================================================================================

function Scene_MenuItemCollector() {
    this.initialize.apply(this, arguments);
}

Scene_MenuItemCollector.prototype = Object.create(Scene_MenuBase.prototype);
Scene_MenuItemCollector.prototype.constructor = Scene_MenuItemCollector;

Scene_MenuItemCollector.prototype.initialize = function() {
	$gameParty.checkInitializedItemCollector();
	$gameParty.hardReset_ItemCollectorList();
    Scene_MenuBase.prototype.initialize.call(this);
    this.setStartingProperties();
};

Scene_MenuItemCollector.prototype.setStartingProperties = function() {
	this._action = 0;
};

Scene_MenuItemCollector.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    this.createAllWindows();
};

Scene_MenuItemCollector.prototype.createAllWindows = function() {
	this._windowSections = new Window_ItemCollectorSections(0, 0, Graphics._boxWidth / 2, 144);
	this._windowHelp     = new Window_Help(2);
	this._windowHelp.y   = Graphics._boxHeight - 108;
	this._windowCommand  = new Window_ItemCollectorCommand(0, this._windowSections.height, Graphics._boxWidth / 3, 
				Graphics._boxHeight - this._windowHelp.height - this._windowSections.height);
	this._windowCommand.setWindowHelp(this._windowHelp);
	this._windowInfo     = new Window_ItemCollectorInfo(this._windowCommand.width, this._windowSections.height, Graphics._boxWidth / 3 * 2, 
				this._windowCommand.height);
	this._windowPlus     = new Window_ItemCollectorPlus(this._windowSections.width, 0, Graphics._boxWidth / 2, this._windowSections.height);
	this.addChild(this._windowSections);
	this.addChild(this._windowHelp);
	this.addChild(this._windowCommand);
	this.addChild(this._windowInfo);
	this.addChild(this._windowPlus);
};

Scene_MenuItemCollector.prototype.update = function() {
	Scene_MenuBase.prototype.update.call(this);
	this.updateMushInputs();
	this.updateSection();
	this.updateItem();
	this.updatePlus();
};

Scene_MenuItemCollector.prototype.updateSection = function() {
	if (this._action == 0) {
		this._windowCommand.setSection(this._windowSections.getSymbol());
		this._windowPlus.setSection(this._windowSections.getSymbol());
	}
};

Scene_MenuItemCollector.prototype.updateItem = function() {
	if (this._windowCommand.index() >= 0) {
		this._windowInfo.setItem(this._windowCommand.getNowItem());
	} else {
		this._windowInfo.setItem(null);
	}
};

Scene_MenuItemCollector.prototype.updatePlus = function() {
	this._windowPlus.setMaxIndex(this._windowCommand.maxItems());
	this._windowPlus.setNowIndex(this._windowCommand.index());
};

Scene_MenuItemCollector.prototype.updateMushInputs = function() {
	if (Input.isTriggered('ok')) {
		this.inputTriggeredOk();
	} else if (Input.isTriggered('escape')) {
		this.inputTriggeredEscape();
	}
};

Scene_MenuItemCollector.prototype.inputTriggeredOk = function() {
	if (this._action == 0) {
		SoundManager.playOk();
		this._action = 1;
		this._windowSections.deactivate();
		this._windowCommand.activate();
		if (this._windowCommand.index() < 0) this._windowCommand.select(0);
	}
};

Scene_MenuItemCollector.prototype.inputTriggeredEscape = function() {
	if (this._action == 0) {
		SoundManager.playCancel();
		this.popScene();
	} else if (this._action == 1) {
		SoundManager.playCancel();
		this._action = 0;
		this._windowSections.activate();
		this._windowCommand.deactivate();
	}
};

//==============================================================================================================
// * SECTION 2.0 : Window MenuCommand
//   - Create the scene
//==============================================================================================================

var aliasMush_WindowMenuCommandMakeCommandList58 = Window_MenuCommand.prototype.makeCommandList;
Window_MenuCommand.prototype.makeCommandList = function() {
    aliasMush_WindowMenuCommandMakeCommandList58.call(this);
    if ($mushFeatures.params['MIT_InMenu']) this.addItemCollectorCommand();
};

Window_MenuCommand.prototype.addItemCollectorCommand = function() {
	if (this.needsCommand($mushFeatures.params['MIT_MenuCommand'])) {
        var enabled = this.isItemCollectorEnabled();
        this.addCommand($mushFeatures.params['MIT_MenuCommand'], 'itemCollector', enabled);
        this.repositionItemCollector();
    }
};

Window_MenuCommand.prototype.isItemCollectorEnabled = function() {
	var enable = true;
	if ($mushFeatures.params['MIT_Switch']) {
		if ($mushFeatures.params['MIT_Switch'] > 0) {
			enable = $gameSwitches.value($mushFeatures.params['MIT_Switch']);
		}
	}
	return enable;
};

Window_MenuCommand.prototype.repositionItemCollector = function() {
	var itemCollector = null;
	for (var i = 0; i < this._list.length; i++) {
		if (this._list[i].symbol == 'itemCollector') {
			itemCollector = this._list[i];
			this._list.splice(i, 1);
			break;
		}
	}
	for (var i = 0; i < this._list.length; i++) {
		if (this._list[i].symbol == 'options') {
			if (itemCollector != null) {
				this._list.splice(i, 0, itemCollector);
				break;
			} 
		}
	}
};

//==============================================================================================================
// * SECTION 2.1 : Window ItemCollector Command
//   - Create the window command
//==============================================================================================================

function Window_ItemCollectorCommand() {
    this.initialize.apply(this, arguments);
};

Window_ItemCollectorCommand.prototype = Object.create(Window_Selectable.prototype);
Window_ItemCollectorCommand.prototype.constructor = Window_ItemCollectorCommand;

Window_ItemCollectorCommand.prototype.initialize = function(x, y, width, height) {
	this.setStartingProperties();
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this.refresh();
};

Window_ItemCollectorCommand.prototype.setStartingProperties = function() {
	this._secSymbol  = 'all'
	this._windowHelp = null;
	this.getAllItems();
	this.getItemList();
};

Window_ItemCollectorCommand.prototype.setWindowHelp = function(windowHelp) {
	this._windowHelp = windowHelp;
};

Window_ItemCollectorCommand.prototype.maxItems = function() {
    return this._itemList.length;
};

Window_ItemCollectorCommand.prototype.maxCols = function() {
    return 1;
};

Window_ItemCollectorCommand.prototype.getDataElements = function(type) {
	var allStuffs = [null];
	if (type == 'item')   var clone = $dataItems.clone();
	if (type == 'weapon') var clone = $dataWeapons.clone();
	if (type == 'armor')  var clone = $dataArmors.clone();
	if (Imported.YEP_ItemCore) {
		for (var i = 1 ; i < clone.length ; i++) {
			if (clone[i]) {
				if (i < Yanfly.Param.ItemStartingId) allStuffs.push( clone[i] );
			}
		}
	} else {
		for (var i = 1 ; i < clone.length ; i++) {
			allStuffs.push(clone[i]);
		}
	}
	return allStuffs;
};

Window_ItemCollectorCommand.prototype.getAllItems = function() {
	var itemList = [];
	var allStuffs = this.getDataElements('item');
	for (var i = 1 ; i < allStuffs.length ; i++) {
		var checked = false;
		if ($mushFeatures.params['MIT_ExcludedItems']) {
			for (var j = 0 ; j < $mushFeatures.params['MIT_ExcludedItems'].length ; j++) {
				if (allStuffs[i].id == $mushFeatures.params['MIT_ExcludedItems'][j]) {
					checked = true;		
				}
			}
		}
		if (!checked && $mushFeatures.params['MIT_SectionIncludes'][allStuffs[i].itypeId - 1]) itemList[ itemList.length ] = allStuffs[i];
	}
	allStuffs = this.getDataElements('weapon');
	for (var i = 1 ; i < allStuffs.length ; i++) {
		var checked = false;
		if ($mushFeatures.params['MIT_ExcludedWeapons']) {
			for (var j = 0 ; j < $mushFeatures.params['MIT_ExcludedWeapons'].length ; j++) {
				if (allStuffs[i].id == $mushFeatures.params['MIT_ExcludedWeapons'][j]) {
					checked = true;		
				}
			}
		}
		if (!checked && $mushFeatures.params['MIT_SectionIncludes'][4]) itemList[ itemList.length ] = allStuffs[i];
	}
	allStuffs = this.getDataElements('armor');
	for (var i = 1 ; i < allStuffs.length ; i++) {
		var checked = false;
		if ($mushFeatures.params['MIT_ExcludedArmors']) {
			for (var j = 0 ; j < $mushFeatures.params['MIT_ExcludedArmors'].length ; j++) {
				if (allStuffs[i].id == $mushFeatures.params['MIT_ExcludedArmors'][j]) {
					checked = true;		
				}
			}
		}
		if (!checked && $mushFeatures.params['MIT_SectionIncludes'][5]) itemList[ itemList.length ] = allStuffs[i];
	}
	this._itemListFull = itemList.clone();
};

Window_ItemCollectorCommand.prototype.getItemList = function() {
	if (this._secSymbol == 'all') {
		this._itemList = this._itemListFull.clone();
	} else {
		this._itemList = [];
		for (var i = 0 ; i < this._itemListFull.length ; i++) {
			var it = this._itemListFull.clone()[i];
			if (this._secSymbol == 'regular') {
				if (DataManager.isItem(it) && it.itypeId == 1) this._itemList.push(it);
			} else if (this._secSymbol == 'key') {
				if (DataManager.isItem(it) && it.itypeId == 2) this._itemList.push(it);
			} else if (this._secSymbol == 'hiddenA') {
				if (DataManager.isItem(it) && it.itypeId == 3) this._itemList.push(it);
			} else if (this._secSymbol == 'hiddenB') {
				if (DataManager.isItem(it) && it.itypeId == 4) this._itemList.push(it);
			} else if (this._secSymbol == 'weapon') {
				if (DataManager.isWeapon(it)) this._itemList.push(it);
			} else if (this._secSymbol == 'armor') {
				if (DataManager.isArmor(it)) this._itemList.push(it);
			}
		}
	}
};

Window_ItemCollectorCommand.prototype.getNowItem = function() {
	return this._itemList[this._index];
};

Window_ItemCollectorCommand.prototype.drawItem = function(index) {
    var rect = this.itemRectForText(index);
    var it = this._itemList[index];
    if ($gameParty.getSeenItem(it)) {
    	this.drawIcon(it.iconIndex, rect.x, rect.y);
    	this.drawText(it.name, rect.x + 36, rect.y, rect.width);
    } else {
    	this.drawText('?????', rect.x, rect.y, rect.width, 'center');
    }
};

Window_ItemCollectorCommand.prototype.setSection = function(symbol) {
	if (this._secSymbol != symbol) {
		this._secSymbol = symbol;
		this.getItemList();
		this.refresh();
		this.select(-1);
	}
};

Window_ItemCollectorCommand.prototype.update = function() {
	Window_Selectable.prototype.update.call(this);
	if (this._windowHelp != null) {
		if ($gameParty.getSeenItem(this.getNowItem())) {
			this._windowHelp.setItem(this.getNowItem());
		} else {
			this._windowHelp.setText('');
		}
	}
};

//==============================================================================================================
// * SECTION 2.2 : Window ItemCollector Sections
//   - Create the window command
//==============================================================================================================

function Window_ItemCollectorSections() {
    this.initialize.apply(this, arguments);
};

Window_ItemCollectorSections.prototype = Object.create(Window_Selectable.prototype);
Window_ItemCollectorSections.prototype.constructor = Window_ItemCollectorSections;

Window_ItemCollectorSections.prototype.initialize = function(x, y, width, height) {
	this.setStartingProperties();
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this.refresh();
    this.select(0);
    this.activate();
};

Window_ItemCollectorSections.prototype.setStartingProperties = function() {
	this._categories = [];
	this._secSymbol  = [];
	this._categories[0] = $mushFeatures.params['MIT_SectionAll'];
	this._secSymbol[0]  = 'all';
	if ($mushFeatures.params['MIT_SectionIncludes'][0]) {
		this._categories[ this._categories.length ] = $mushFeatures.params['MIT_SectionRegular'];
		this._secSymbol[ this._secSymbol.length ]   = 'regular'; 
	}
	if ($mushFeatures.params['MIT_SectionIncludes'][1]) {
		this._categories[ this._categories.length ] = $mushFeatures.params['MIT_SectionKey'];
		this._secSymbol[ this._secSymbol.length ]   = 'key'; 
	}
	if ($mushFeatures.params['MIT_SectionIncludes'][2]) {
		this._categories[ this._categories.length ] = $mushFeatures.params['MIT_SectionHiddenA'];
		this._secSymbol[ this._secSymbol.length ]   = 'hiddenA'; 
	}
	if ($mushFeatures.params['MIT_SectionIncludes'][3]) {
		this._categories[ this._categories.length ] = $mushFeatures.params['MIT_SectionHiddenB'];
		this._secSymbol[ this._secSymbol.length ]   = 'hiddenB'; 
	}
	if ($mushFeatures.params['MIT_SectionIncludes'][4]) {
		this._categories[ this._categories.length ] = $mushFeatures.params['MIT_SectionWeapon'];
		this._secSymbol[ this._secSymbol.length ]   = 'weapon'; 
	}
	if ($mushFeatures.params['MIT_SectionIncludes'][5]) {
		this._categories[ this._categories.length ] = $mushFeatures.params['MIT_SectionArmor'];
		this._secSymbol[ this._secSymbol.length ]   = 'armor'; 
	}
};

Window_ItemCollectorSections.prototype.maxItems = function() {
    return this._categories.length;
};

Window_ItemCollectorSections.prototype.maxCols = function() {
    return 1;
};

Window_ItemCollectorSections.prototype.drawItem = function(index) {
    var rect = this.itemRectForText(index);
    this.drawText(this._categories[index], rect.x, rect.y, rect.width, 'center');
};

Window_ItemCollectorSections.prototype.getSymbol = function() {
	return this._secSymbol[this._index];
};

//==============================================================================================================
// * SECTION 2.3 : Window ItemCollector Info
//   - Create the window command
//==============================================================================================================

function Window_ItemCollectorInfo() {
    this.initialize.apply(this, arguments);
};

Window_ItemCollectorInfo.prototype = Object.create(Window_Base.prototype);
Window_ItemCollectorInfo.prototype.constructor = Window_ItemCollectorInfo;

Window_ItemCollectorInfo.prototype.initialize = function(x, y, width, height) {
	this.setStartingProperties();
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this.refresh();
};

Window_ItemCollectorInfo.prototype.setStartingProperties = function() {
	this._nowItem = null;
};

Window_ItemCollectorInfo.prototype.setItem = function(item) {
	if (this._nowItem != item) {
		this._nowItem = item;
		this.refresh();
	}
};

Window_ItemCollectorInfo.prototype.refresh = function() {
	this.contents.clear();
	if (this._nowItem != null && $gameParty.getSeenItem(this._nowItem)) {
		var it = this._nowItem;
		var backColor = $mushFeatures.params['MIT_ParametersBackColor'];
		var u = this.width - 36 - 128;
		this.contents.fillRect(0, 0, 128, 128, backColor);
		this.contents.fillRect(136, 0, u, 32, backColor);
		this.contents.fillRect(136, 54, u / 3 - 2, 32, backColor);
		this.contents.fillRect(140 + u / 3, 54, u / 3 * 2, 32, backColor);
		this.contents.fillRect(136, 96, u / 3 - 2, 32, backColor);
		this.contents.fillRect(140 + u / 3, 96, u / 3 * 2, 32, backColor);
		if (Imported.YEP_X_ItemPictureImg == true) {
			if (it.pictureImg != '' && it.pictureImg != undefined) {
				this.setUpYanflySprite(it.pictureImg, it.pictureHue);
			} else {
				this.clearSpriteYanfly();
				this.mush_drawIconPlus(it.iconIndex, 0, 0, 4);
			}
		} else {
			this.mush_drawIconPlus(it.iconIndex, 0, 0, 4);
		}
		this.changeTextColor(this.systemColor());
		this.drawText(it.name, 140, 0, this.width - 164, 'center');
		this.drawText($mushFeatures.params['MIT_TextId'] + ':', 138, 54, u / 3 - 10, 'left');
		this.drawText($mushFeatures.params['MIT_TextType'] + ':', 140 + u / 3 + 2, 54, u / 3 * 2, 'left');
		this.drawText($mushFeatures.params['MIT_TextOwn'] + ':', 138, 96, u / 3 - 10, 'left');
		this.drawText($mushFeatures.params['MIT_TextPrice'] + ':', 140 + u / 3 + 2, 96, u / 3 * 2, 'left');
		this.resetTextColor();
		var type = this.getItemType(it);
		var typeL = $mushFeatures.params['MIT_TextType'].length * 18;
		var quantity = this.getItemQuantity(it);
		this.drawText(it.id, 140, 54, u / 3 - 8, 'right');
		this.drawText(type, 140 + u / 3 + typeL, 54, u - (u / 3 + 18) - typeL, 'right');
		this.drawText(quantity? quantity : 0, 140, 96, u / 3 - 8, 'right');
		this.drawText(it.price, 140 + u / 3, 96, u - (u / 3 + 18), 'right');
		if (DataManager.isItem(it)) {
			this.drawInfoItem(it, backColor);
		} else if (DataManager.isWeapon(it) || DataManager.isArmor(it)) {
			this.drawInfoEquip(it, backColor);
		}
	} else {
		if (this._sprtYEP) {
			this._sprtYEP.hide();
		}
	}
};

Window_ItemCollectorInfo.prototype.mush_drawIconPlus = function(iconIndex, x, y, zoom) {
    var bitmap = ImageManager.loadSystem('IconSet');
    var pw = Window_Base._iconWidth;
    var ph = Window_Base._iconHeight;
    var sx = iconIndex % 16 * pw;
    var sy = Math.floor(iconIndex / 16) * ph;
    var zoomValue = pw * zoom;
    this.contents.blt(bitmap, sx, sy, pw, ph, x, y, zoomValue, zoomValue);
};

Window_ItemCollectorInfo.prototype.getItemType = function(item) {
	if (DataManager.isItem(item)) {
		switch (item.itypeId) {
			case 1: return $mushFeatures.params['MIT_SectionRegular']; break;
			case 2: return $mushFeatures.params['MIT_SectionKey']; break;
			case 3: return $mushFeatures.params['MIT_SectionHiddenA']; break;
			case 4: return $mushFeatures.params['MIT_SectionHiddenB']; break;
		}
	} else if (DataManager.isWeapon(item)) {
		var wt = item.wtypeId;
		return $dataSystem.weaponTypes[wt];
	} else if (DataManager.isArmor(item)) {
		var at = item.atypeId;
		return $dataSystem.armorTypes[at];
	} else {
		return '';
	}
};

Window_ItemCollectorInfo.prototype.getItemQuantity = function(item) {
	var id = item.id;
	if (Imported.YEP_ItemCore) {
		var own = 0;
		var nowItems = [];
		if (DataManager.isItem(item)) {
			var list =  $gameParty._items;
			var data = $dataItems.clone();
		} else if (DataManager.isWeapon(item)) {
			var list = $gameParty._weapons;
			var data = $dataWeapons.clone();
		} else if (DataManager.isArmor(item)) {
			var list = $gameParty._armors;
			var data = $dataArmors.clone();
		} else {
			var list = [];
			var data = [];
		}
		for (var i = 1 ; i < data.length ; i++) {
			if (data[i]) {
				if (data[i].baseItemId == id || data[i].id == id) nowItems.push(i);
			}
		}
		for (var i = 0 ; i < nowItems.length ; i++) {
			if ( list[ nowItems[i] ] ) {
				own += list[ nowItems[i] ];
			}
		}
		return own;
	} else { 
		if (DataManager.isItem(item)) {
			return $gameParty._items[id];
		} else if (DataManager.isWeapon(item)) {
			return $gameParty._weapons[id];
		} else if (DataManager.isArmor(item)) {
			return $gameParty._armors[id];
		} else {
			return 0;
		}
	}
};

Window_ItemCollectorInfo.prototype.drawInfoItem = function(it, backColor) {
	var u = (this.width - 36) / 2;
	var y = 136;
	var h = 36;
	this.contents.fillRect(0, y, u - 4, 36 * 5, backColor);
	this.contents.fillRect(u + 4, y, u - 4, 36 * 5, backColor);
	this.changeTextColor(this.systemColor());
	this.drawText($mushFeatures.params['MIT_TextHpRecover+'] + ':', 2, y + h * 0, u / 2);
	this.drawText($mushFeatures.params['MIT_TextHpRecover%'] + ':', 2, y + h * 1, u / 2);
	this.drawText($mushFeatures.params['MIT_TextMpRecover+'] + ':', 2, y + h * 2, u / 2);
	this.drawText($mushFeatures.params['MIT_TextMpRecover%'] + ':', 2, y + h * 3, u / 2);
	this.drawText($mushFeatures.params['MIT_TextTpGain'] + ':',     2, y + h * 4, u / 2);
	this.drawText($mushFeatures.params['MIT_TextAddState'] + ':',   u + 6, y + h * 0, u - 6);
	this.drawText($mushFeatures.params['MIT_TextRemoveState'] + ':',   u + 6, y + h * 2.5, u - 6);
	this.resetTextColor();
	var textData = {'hpAdd': '----', 'hpPour': '----', 'mpAdd': '----', 'mpPour': '----', 'tpAdd': '----'};
	var states = {'add': [], 'remove': []};
	for (var i = 0 ; i < it.effects.length ; i++) {
		var ef = it.effects[i];
		if (ef.code == 11) { // Heal Hp
			if (ef.dataId == 0) {
				if (ef.value1 != 0) textData['hpPour'] = ef.value1 * 100 + '%';
				if (ef.value2 != 0) textData['hpAdd']  = ef.value2;
			}
		} else if (ef.code == 12) { // Heal Mp
			if (ef.dataId == 0) {
				if (ef.value1 != 0) textData['mpPour'] = ef.value1 * 100 + '%';
				if (ef.value2 != 0) textData['mpAdd']  = ef.value2;
			}
		} else if (ef.code == 13) { // Tp Gain
			if (ef.dataId == 0) {
				if (ef.value1 != 0) textData['tpAdd'] = ef.value1;
			}
		} else if (ef.code == 21) { // add States
			if (ef.dataId != 0) {
				states['add'].push(ef.dataId);
			} 
		} else if (ef.code == 22) { // remove States
			if (ef.dataId != 0) {
				states['remove'].push(ef.dataId);
			} 
		}
	}
	if (textData.hpAdd >= 0) {
		textData.hpAdd = '+' + textData.hpAdd;
	} 
	if (textData.mpAdd >= 0) {
		textData.mpAdd = '+' + textData.mpAdd;
	} 
	if (textData.tpAdd >= 0) {
		textData.tpAdd = '+' + textData.tpAdd;
	} 
	this.drawText(textData.hpAdd,  u / 2, y + h * 0, u / 2 - 8, 'right');
	this.drawText(textData.hpPour, u / 2, y + h * 1, u / 2 - 8, 'right');
	this.drawText(textData.mpAdd,  u / 2, y + h * 2, u / 2 - 8, 'right');
	this.drawText(textData.mpPour, u / 2, y + h * 3, u / 2 - 8, 'right');
	this.drawText(textData.tpAdd,  u / 2, y + h * 4, u / 2 - 8, 'right');
	if (states['add'].length > 0) {
		for (var i = 0 ; i < states['add'].length ; i++) {
			var x = this.width - 70 - 34 * i;
			var icon = $dataStates[ states['add'][i] ].iconIndex;
			this.drawIcon(icon, x, y + h * 1);
		}
	} else {
		this.drawText('------', u + 6, y + h * 1, u - 8, 'right');
	}
	if (states['remove'].length > 0) {
		for (var i = 0 ; i < states['remove'].length ; i++) {
			var x = this.width - 70 - 34 * i;
			var icon = $dataStates[ states['remove'][i] ].iconIndex;
			this.drawIcon(icon, x, y + h * 3.5);
		}
	} else {
		this.drawText('------', u + 6, y + h * 3.5, u - 8, 'right');
	}
};

Window_ItemCollectorInfo.prototype.drawInfoEquip = function(it, backColor) {
	var u = (this.width - 36) / 2;
	var y = 136;
	// Yanfly
	var ac = $gameParty.members()[0];
	// test end
	var paramConverter = ['MHP', 'MMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'];
	this.contents.fillRect(0, y, u * 2, 32 * 4, backColor);
	this.contents.fillRect(0, y + 134, u - 4, 36 * 2, backColor);
	this.contents.fillRect(u + 4, y + 134, u - 4, 36 * 2, backColor);
	for (var i = 0 ; i < 8 ; i++) {
		if (Imported.YEP_EquipCore) {
			if ($mushFeatures.params['MIT_YEP_EquipCoreLunaticFactor']) {
				var newParam = it.params[i] + ac.evalParamPlus(it, i);
			} else {
				var newParam = it.params[i];
			}
		} else {
			var newParam = it.params[i];
		}
		var xPos = u * (i % 2) + 2;
		var yPos = y + 32 * Math.floor(i / 2);
		if ($mushFeatures.params['MIT_ParametersBar']) {
			var color = $mushFeatures.params[ 'MIT_ParametersBarColor' + paramConverter[i] ];
			var highest = this.getEquipHighestParam(it);
			var barWidth = (u - 108) * (newParam / highest);
			this.contents.fillRect(xPos + u - 12 - barWidth, yPos + 16, barWidth, 12, color);
		}
		var icon = $mushFeatures.params['MIT_ParametersIcons'][i];
		var haveIcon = false;
		if (icon && icon != -1) {
			this.drawIcon(icon, xPos, yPos);
			haveIcon = true;
		}
		this.changeTextColor(this.systemColor());
		this.drawText($mushFeatures.params['MIT_ParametersText'][i] + ':', haveIcon? (xPos+36) : xPos, yPos, 144);
		this.resetTextColor();
		this.drawText(newParam, xPos, yPos, u - 16, 'right');
	}
	this.changeTextColor(this.systemColor());
	this.drawText($mushFeatures.params['MIT_ElementWeakText'] + ':', 2, y + 134, u - 16);
	this.drawText($mushFeatures.params['MIT_ElementResistText'] + ':', u + 6, y + 134, u - 16);
	this.resetTextColor();
	var elements = {'weak': [], 'resist': []};
	for (var i = 0 ; i < it.traits.length ; i++) {
		var tt = it.traits[i];
		if (tt.code == 11) { // code for elements
			if (tt.value > 1) elements['weak'].push(tt.dataId);
			if (tt.value < 1) elements['resist'].push(tt.dataId);
		}
	}
	if (elements['weak'].length > 0) {
		for (var i = 0 ; i < elements['weak'].length ; i++) {
			var x = u - 38 - 34 * i;
			var icon = $mushFeatures.params['MIT_ElementIcons'][ elements.weak[i] - 1 ];
			this.drawIcon(icon, x, y + 166);
		}
	} else {
		this.drawText('------', 2, y + 166, u - 8, 'right');
	}
	if (elements['resist'].length > 0) {
		for (var i = 0 ; i < elements['resist'].length ; i++) {
			var x = this.width - 70 - 34 * i;
			var icon = $mushFeatures.params['MIT_ElementIcons'][ elements.resist[i] - 1 ];
			this.drawIcon(icon, x, y + 166);
		}
	} else {
		this.drawText('------',  u + 2, y + 166, u - 4, 'right');
	}
};

Window_ItemCollectorInfo.prototype.getEquipHighestParam = function(it) {
	var curHighest = 0;
	var ac = $gameParty.members()[0];
	for (var i = 0 ; i < 8 ; i++) {
		if (Imported.YEP_EquipCore) {
			if ($mushFeatures.params['MIT_YEP_EquipCoreLunaticFactor']) {
				var newParam = it.params[i] + ac.evalParamPlus(it, i);
			} else {
				var newParam = it.params[i];
			}
		} else {
			var newParam = it.params[i];
		}
		if (newParam > curHighest) curHighest = 0 + newParam;
	}
	return curHighest;
};

Window_ItemCollectorInfo.prototype.setUpYanflySprite = function(filename, hue) {
	if (this._sprtYEP) {
		this._updateSprtYEP = true;
		this._sprtYEP.bitmap = ImageManager.loadPicture(filename, hue);
		this._sprtYEP.hide();
	} else {
		this._updateSprtYEP = true;
		this._sprtYEP = new Sprite_Base();
		this._sprtYEP.x += 18;
		this._sprtYEP.y += 18;
		this._sprtYEP.hide();
		this.addChild(this._sprtYEP);
		this._sprtYEP.bitmap = ImageManager.loadPicture(filename, hue);
	}
};

Window_ItemCollectorInfo.prototype.clearSpriteYanfly = function() {
	if (this._sprtYEP) {
		this._sprtYEP.hide();
	}
};

Window_ItemCollectorInfo.prototype.update = function() {
	Window_Base.prototype.update.call(this);
	if (this._updateSprtYEP) {
		if (this._sprtYEP.width && this._sprtYEP.height) {
			if ($mushFeatures.params['MIT_YEP_ItemPictureScale']) {
				szX = 128;
				szY = 128;
			} else {
				szX = Yanfly.Param.ItemImageMaxWidth;
				szY = Yanfly.Param.ItemImageMaxHeight;
			}
			this._sprtYEP.scale.x = szX / this._sprtYEP.width;
			this._sprtYEP.scale.y = szY / this._sprtYEP.height;
			this._sprtYEP.show();
			this._updateSprtYEP = false;
		}
	}
};

//==============================================================================================================
// * SECTION 2.4 : Window ItemCollector Plus
//   - Create the window command
//==============================================================================================================

function Window_ItemCollectorPlus() {
    this.initialize.apply(this, arguments);
};

Window_ItemCollectorPlus.prototype = Object.create(Window_Base.prototype);
Window_ItemCollectorPlus.prototype.constructor = Window_ItemCollectorPlus;

Window_ItemCollectorPlus.prototype.initialize = function(x, y, width, height) {
	this.setStartingProperties();
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this.refresh();
};

Window_ItemCollectorPlus.prototype.setStartingProperties = function() {
	this._nowIndex = -1;
	this._maxIndex = -1;
	this._section  = 'all';
};

Window_ItemCollectorPlus.prototype.setNowIndex = function(index) {
	if (this._nowIndex != index) {
		this._nowIndex = index;
		this.refresh();
	}
};

Window_ItemCollectorPlus.prototype.setMaxIndex = function(max) {
	if (this._maxIndex != max) {
		this._maxIndex = max;
		this.refresh();
	}
};

Window_ItemCollectorPlus.prototype.setSection = function(section) {
	if (this._section != section) {
		this._section = section;
		this.refresh();
	}
};

Window_ItemCollectorPlus.prototype.refresh = function() {
	var u = (this.width - 36);
	this.contents.clear();
	if (this._nowIndex >= 0 && this._maxIndex >= 0) {
		var nowText = (this._nowIndex + 1) + '/' + (this._maxIndex);
		this.drawText(nowText, this.width - 36 - 200, 0, 200, 'right');  
	} else {
		this.drawText('-----', this.width - 36 - 200, 0, 200, 'right');  
	}
	this.changeTextColor(this.systemColor());
	this.drawText($mushFeatures.params['MIT_TextCompletion'], 0, 0, u / 2);
	this.drawText(this.getSectionName() + ':', 0, 36, u / 3);
	this.resetTextColor();
	if (this._section == 'all') {
		this.drawCompletionSection(u, 'all');
	} else if (this._section == 'regular' || this._section == 'key' || this._section == 'hiddenA' || this._section == 'hiddenB') {
		this.drawCompletionSection(u, 'items');
	} else if (this._section == 'weapon') {
		this.drawCompletionSection(u, 'weapons');
	} else if (this._section == 'armor') {
		this.drawCompletionSection(u, 'armors');
	}
	this.drawCompletionChest(u);
};

Window_ItemCollectorPlus.prototype.getSectionName = function() {
	var section = '';
	switch (this._section) {
		case 'all': section = $mushFeatures.params['MIT_SectionAll']; break;
		case 'regular': section = $mushFeatures.params['MIT_SectionRegular']; break;
		case 'key':     section = $mushFeatures.params['MIT_SectionKey']; break;
		case 'hiddenA': section = $mushFeatures.params['MIT_SectionHiddenA']; break;
		case 'hiddenB': section = $mushFeatures.params['MIT_SectionHiddenB']; break;
		case 'weapon':  section = $mushFeatures.params['MIT_SectionWeapon']; break;
		case 'armor':   section = $mushFeatures.params['MIT_SectionArmor']; break;
	}
	return section;
};

Window_ItemCollectorPlus.prototype.getSectionType = function() {
	var section = -1;
	switch (this._section) {
		case 'regular': section = 1; break;
		case 'key':     section = 2; break;
		case 'hiddenA': section = 3; break;
		case 'hiddenB': section = 4; break;
	}
	return section;
};

Window_ItemCollectorPlus.prototype.drawCompletionSection = function(u, symbol) {
	var allItems = $gameParty.getItemCollectorList();
	var barMaxWidth = u / 3 * 2 - 12;
	var seen = 0;
	var total = 0;
	if (symbol != 'all') {
		for (var i = 0 ; i < allItems[symbol].length ; i++) {
			if (symbol == 'items') {
				var sectionType = this.getSectionType();
				if (allItems[symbol][i].type == sectionType) {
					if (allItems[symbol][i].seen && allItems[symbol][i].show) seen += 1;
					if (allItems[symbol][i].show) total += 1;
				}
			} else {
				if (allItems[symbol][i].seen && allItems[symbol][i].show) seen += 1;
				if (allItems[symbol][i].show) total += 1;
			}
		}
	} else {
		var allSectionsItems = allItems.items.concat(allItems.weapons, allItems.armors);
		for (var i = 0 ; i < allSectionsItems.length ; i++) {
			if (allSectionsItems[i].seen && allSectionsItems[i].show) seen += 1;
			if (allSectionsItems[i].show) total += 1;
		}
	}
	var pour = seen / total.clamp(1, 99999999);
	var barWidth = (Math.floor(pour * barMaxWidth)).clamp(0, barMaxWidth);
	this.contents.fillRect(u / 3 + 12, 72 - this.contents.fontSize + 12, barMaxWidth, 12, this.gaugeBackColor());
	this.contents.gradientFillRect(u / 3 + 12 + (barMaxWidth - barWidth), 72 - this.contents.fontSize + 12, barWidth, 12,
					$mushFeatures.params['MIT_SectionBarColor1'], $mushFeatures.params['MIT_SectionBarColor2']);
	this.drawText( Math.floor(pour * 100) + '%', u / 3 + 12, 36, barMaxWidth, 'right' );
};

Window_ItemCollectorPlus.prototype.drawCompletionChest = function(u) {
	if ($mushFeatures.params['MIT_ChestVariable'] && $mushFeatures.params['MIT_ChestTotal']) {
		if ($mushFeatures.params['MIT_ChestVariable'] > 0 && $mushFeatures.params['MIT_ChestTotal'] > 0) {
			this.changeTextColor(this.systemColor());
			this.drawText($mushFeatures.params['MIT_TextChest'] + ':', 0, 72, u / 3);
			this.resetTextColor();
			var vr = $mushFeatures.params['MIT_ChestVariable'];
			var opened = $gameVariables.value(vr);
			var total  = $mushFeatures.params['MIT_ChestTotal'];
			var pour = opened / total.clamp(1, 99999999);
			var barMaxWidth = u / 3 * 2 - 12;
			var barWidth = (Math.floor(pour * barMaxWidth)).clamp(0, barMaxWidth);
			this.contents.fillRect(u / 3 + 12, 108 - this.contents.fontSize + 12, barMaxWidth, 12, this.gaugeBackColor());
			this.contents.gradientFillRect(u / 3 + 12 + (barMaxWidth - barWidth), 108 - this.contents.fontSize + 12, barWidth, 12,
							$mushFeatures.params['MIT_ChestBarColor1'], $mushFeatures.params['MIT_ChestBarColor2']);
			this.drawText( (Math.floor(pour * 100)).clamp(0, 100) + '%', u / 3 + 12, 72, barMaxWidth, 'right' );
		} 
	}
};

//==============================================================================================================
// * SECTION 3.0 : Game Party
//   - Create the item collector tracker
//==============================================================================================================

var aliasMush_GamePartyInitialize86 = Game_Party.prototype.initialize; 
Game_Party.prototype.initialize = function() {
    aliasMush_GamePartyInitialize86.call(this);
    this._itemCollectList = this.mush_setBaseItemCollectorList();
};

Game_Party.prototype.mush_setBaseItemCollectorList = function() {
	itList = {
    	'items':   [],
    	'weapons': [],
    	'armors':  []
    }
	for (var i = 1 ; i < $dataItems.length ; i++) {
		if (!$dataItems[i]) break;
		if (Imported.YEP_ItemCore) {
			if (i >= Yanfly.Param.ItemStartingId) break;
		}
		var show = true;
		var name = $dataItems[i].name || '';
		var seen = false;
		var type = $dataItems[i].itypeId || 0;
		if ($mushFeatures.params['MIT_ExcludedItems']) {
			for (var j = 0 ; j < $mushFeatures.params['MIT_ExcludedItems'].length ; j++) {
				if ($dataItems[i].id == $mushFeatures.params['MIT_ExcludedItems'][j]) {
					show = false;		
				}
			}
		}
		var nowItem = {'name': name, 'show': show, 'seen': seen, 'type': type};
		itList['items'].push(nowItem)
	}
	for (var i = 1 ; i < $dataWeapons.length ; i++) {
		if (!$dataWeapons[i]) break;
		if (Imported.YEP_ItemCore) {
			if (i >= Yanfly.Param.ItemStartingId) break;
		}
		var show = true;
		var name = $dataWeapons[i].name || '';
		var seen = false;
		if ($mushFeatures.params['MIT_ExcludedWeapons']) {
			for (var j = 0 ; j < $mushFeatures.params['MIT_ExcludedWeapons'].length ; j++) {
				if ($dataWeapons[i].id == $mushFeatures.params['MIT_ExcludedWeapons'][j]) {
					show = false;		
				}
			}
		}
		var nowWeapon = {'name': name, 'show': show, 'seen': seen};
		itList['weapons'].push(nowWeapon);
	}
	for (var i = 1 ; i < $dataArmors.length ; i++) {
		if (!$dataArmors[i]) break;
		if (Imported.YEP_ItemCore) {
			if (i >= Yanfly.Param.ItemStartingId) break;
		}
		var show = true;
		var name = $dataArmors[i].name || '';
		var seen = false;
		if ($mushFeatures.params['MIT_ExcludedArmors']) {
			for (var j = 0 ; j < $mushFeatures.params['MIT_ExcludedArmors'].length ; j++) {
				if ($dataArmors[i].id == $mushFeatures.params['MIT_ExcludedArmors'][j]) {
					show = false;		
				}
			}
		}
		var nowArmor = {'name': name, 'show': show, 'seen': seen};
		itList['armors'].push(nowArmor);
	}
	return itList;
};

Game_Party.prototype.hardReset_ItemCollectorList = function() {
	if ($mushFeatures.params['MIT_HardReset']) {
		this._itemCollectList = this.mush_setBaseItemCollectorList();
	} 
};

Game_Party.prototype.checkInitializedItemCollector = function() {
	if (this._itemCollectList == undefined) {
		this._itemCollectList = this.mush_setBaseItemCollectorList();
	} else {
		if ($mushFeatures.params['MIT_AutoUpdate']) {
			this.itemCollector_AutoUpdate('items');
			this.itemCollector_AutoUpdate('weapons');
			this.itemCollector_AutoUpdate('armors');
		}
	}
};

Game_Party.prototype.itemCollector_AutoUpdate = function(type) {
	var haveToReset = false;
	var tempList = this.mush_setBaseItemCollectorList();
	if (this._itemCollectList[type].length != tempList[type].length) {
		this._itemCollectList = this.mush_setBaseItemCollectorList();
		return;
	}
	for (var i = 0; i < tempList[type].length ; i++) {
		if (this._itemCollectList[type][i] && tempList[type][i]) {
			if (this._itemCollectList[type][i].name == tempList[type][i].name) {
				this._itemCollectList[type][i].show = tempList[type][i].show;
			} else {
				this._itemCollectList = this.mush_setBaseItemCollectorList();
				break;
			}
		} else {
			this._itemCollectList = this.mush_setBaseItemCollectorList();
			break;
		}
	}
};

Game_Party.prototype.getItemCollectorList = function() {
	return this._itemCollectList;
};

Game_Party.prototype.getSeenItem = function(item) {
	if (DataManager.isItem(item)) var type = 'items';
	if (DataManager.isWeapon(item)) var type = 'weapons';
	if (DataManager.isArmor(item)) var type = 'armors';
	if (type) {
		var id = item.id - 1;
		if (Imported.YEP_ItemCore) {
			if (id >= Yanfly.Param.ItemStartingId) id = item.baseItemId - 1;
		}
		var seen = this._itemCollectList[type][id].seen;
		return seen;
	} else {
		return false;
	}
};

var aliasMush_GamePartyGainItem17 = Game_Party.prototype.gainItem;
Game_Party.prototype.gainItem = function(item, amount, includeEquip) {
    aliasMush_GamePartyGainItem17.call(this, item, amount, includeEquip);
    if (item) {
    	this.checkInitializedItemCollector();
	    var id = item.id - 1;
	    if (Imported.YEP_ItemCore) {
	    	if (id >= Yanfly.Param.ItemStartingId) id = item.baseItemId - 1;
	    }
	    if (DataManager.isItem(item) && id >= 0) {
	    	this._itemCollectList['items'][id].seen = true;
	    } else if (DataManager.isWeapon(item) && id >= 0) {
	    	this._itemCollectList['weapons'][id].seen = true;
	    } else if (DataManager.isArmor(item) && id >= 0) {
	    	this._itemCollectList['armors'][id].seen = true;
	    }
    }
};

Game_Party.prototype.getCompletionItemCollector = function(category) {
	var dt = this._itemCollectList;
	var allData = [];
	var itTotal = 0;
	var itSeen = 0;
	if (category == 'all' || category == 'items') {
		for (var i = 0 ; i < dt['items'].length ; i++) {
			allData.push(dt['items'][i]);
		}
	}
	if (category == 'all' || category == 'armors') {
		for (var i = 0 ; i < dt['armors'].length ; i++) {
			allData.push(dt['armors'][i]);
		}
	}
	if (category == 'all' || category == 'weapons') {
		for (var i = 0 ; i < dt['weapons'].length ; i++) {
			allData.push(dt['weapons'][i]);
		}
	}
	for (var i = 0 ; i < allData.length ; i++) {
		var it = allData[i];
		if (it.show) {
			itTotal += 1;
		}
		if (it.show && it.seen) {
			itSeen += 1;
		}
	}
	if (itTotal > 0) {
		var pour = Math.floor(itSeen / itTotal * 100);
		return pour;
	} else {
		return 0;
	}
};

//==============================================================================================================
// * SECTION 3.1 : Game Interpreter
//   - setting the plugin commands
//==============================================================================================================

var aliasMush_GameInterpreterPluginCommand92 = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
        aliasMush_GameInterpreterPluginCommand92.call(this, command, args);
        if (command === 'ItemCollector') {
            switch (args[0]) {
            case 'open':
                SceneManager.push(Scene_MenuItemCollector);
                break;
            case 'add':
                $gameParty._itemCollectList[ args[1] ][ args[2] - 1 ].seen = true;
                break;
            case 'remove':
                $gameParty._itemCollectList[ args[1] ][ args[2] - 1 ].seen = false;
                break;
            case 'getCompletion':
            	var variableId = args[2];
            	var value = $gameParty.getCompletionItemCollector(args[1]);
            	$gameVariables.setValue(variableId, value);
            }
        }
    };
