"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var index_exports = {};
__export(index_exports, {
  Activity: () => import_Activity.default,
  AddressBook: () => import_AddressBook.default,
  AirConditioner: () => import_AirConditioner.default,
  Airbnb: () => import_Airbnb.default,
  Airplane: () => import_Airplane.default,
  AirplaneAlt01: () => import_AirplaneAlt01.default,
  AirplaneAlt02: () => import_AirplaneAlt02.default,
  Airplay: () => import_Airplay.default,
  Alarm: () => import_Alarm.default,
  AlarmCancel: () => import_AlarmCancel.default,
  AlarmCheck: () => import_AlarmCheck.default,
  AlarmMinus: () => import_AlarmMinus.default,
  AlarmOff: () => import_AlarmOff.default,
  AlarmPlus: () => import_AlarmPlus.default,
  AlarmSnooze: () => import_AlarmSnooze.default,
  AlertCircle: () => import_AlertCircle.default,
  AlertOctagon: () => import_AlertOctagon.default,
  AlertSquare: () => import_AlertSquare.default,
  AlertTriangle: () => import_AlertTriangle.default,
  AlignBottom: () => import_AlignBottom.default,
  AlignHorizontalCenter: () => import_AlignHorizontalCenter.default,
  AlignLeft: () => import_AlignLeft.default,
  AlignRight: () => import_AlignRight.default,
  AlignTextCenter: () => import_AlignTextCenter.default,
  AlignTextJustifyAll: () => import_AlignTextJustifyAll.default,
  AlignTextJustifyCenter: () => import_AlignTextJustifyCenter.default,
  AlignTextJustifyLeft: () => import_AlignTextJustifyLeft.default,
  AlignTextJustifyRight: () => import_AlignTextJustifyRight.default,
  AlignTextLeft: () => import_AlignTextLeft.default,
  AlignTextRight: () => import_AlignTextRight.default,
  AlignTop: () => import_AlignTop.default,
  AlignVerticalCenter: () => import_AlignVerticalCenter.default,
  Alpha: () => import_Alpha.default,
  AnalyzeVoice: () => import_AnalyzeVoice.default,
  Anchor: () => import_Anchor.default,
  Android: () => import_Android.default,
  Angularjs: () => import_Angularjs.default,
  Annotation: () => import_Annotation.default,
  AnnotationAlert: () => import_AnnotationAlert.default,
  AnnotationCheck: () => import_AnnotationCheck.default,
  AnnotationDots: () => import_AnnotationDots.default,
  AnnotationInfo: () => import_AnnotationInfo.default,
  AnnotationPlus: () => import_AnnotationPlus.default,
  AnnotationQuestion: () => import_AnnotationQuestion.default,
  AnnotationText: () => import_AnnotationText.default,
  Announcement: () => import_Announcement.default,
  AnnouncementAlt01: () => import_AnnouncementAlt01.default,
  AnnouncementAlt02: () => import_AnnouncementAlt02.default,
  Apple: () => import_Apple.default,
  Apps: () => import_Apps.default,
  Apron: () => import_Apron.default,
  Archive: () => import_Archive.default,
  ArrowCircleDown: () => import_ArrowCircleDown.default,
  ArrowCircleDownLeft: () => import_ArrowCircleDownLeft.default,
  ArrowCircleDownRight: () => import_ArrowCircleDownRight.default,
  ArrowCircleLeft: () => import_ArrowCircleLeft.default,
  ArrowCircleRight: () => import_ArrowCircleRight.default,
  ArrowCircleUp: () => import_ArrowCircleUp.default,
  ArrowCircleUpLeft: () => import_ArrowCircleUpLeft.default,
  ArrowCircleUpRight: () => import_ArrowCircleUpRight.default,
  ArrowDown: () => import_ArrowDown.default,
  ArrowDownLeft: () => import_ArrowDownLeft.default,
  ArrowDownRight: () => import_ArrowDownRight.default,
  ArrowElbowDownLeft: () => import_ArrowElbowDownLeft.default,
  ArrowElbowDownRight: () => import_ArrowElbowDownRight.default,
  ArrowElbowLeftDown: () => import_ArrowElbowLeftDown.default,
  ArrowElbowLeftUp: () => import_ArrowElbowLeftUp.default,
  ArrowElbowRightDown: () => import_ArrowElbowRightDown.default,
  ArrowElbowRightUp: () => import_ArrowElbowRightUp.default,
  ArrowElbowUpLeft: () => import_ArrowElbowUpLeft.default,
  ArrowElbowUpRight: () => import_ArrowElbowUpRight.default,
  ArrowLeft: () => import_ArrowLeft.default,
  ArrowRight: () => import_ArrowRight.default,
  ArrowSplitDown: () => import_ArrowSplitDown.default,
  ArrowSplitDownAlt: () => import_ArrowSplitDownAlt.default,
  ArrowSplitLeft: () => import_ArrowSplitLeft.default,
  ArrowSplitLeftAlt: () => import_ArrowSplitLeftAlt.default,
  ArrowSplitRight: () => import_ArrowSplitRight.default,
  ArrowSplitRightAlt: () => import_ArrowSplitRightAlt.default,
  ArrowSplitUp: () => import_ArrowSplitUp.default,
  ArrowSplitUpAlt: () => import_ArrowSplitUpAlt.default,
  ArrowUp: () => import_ArrowUp.default,
  ArrowUpLeft: () => import_ArrowUpLeft.default,
  ArrowUpRight: () => import_ArrowUpRight.default,
  At: () => import_At.default,
  Atm: () => import_Atm.default,
  Atom: () => import_Atom.default,
  AtomEditor: () => import_AtomEditor.default,
  Attachment: () => import_Attachment.default,
  AttachmentAlt01: () => import_AttachmentAlt01.default,
  AttachmentAlt02: () => import_AttachmentAlt02.default,
  Australia: () => import_Australia.default,
  BabyChanging: () => import_BabyChanging.default,
  Backpack: () => import_Backpack.default,
  BackpackAlt: () => import_BackpackAlt.default,
  Bacon: () => import_Bacon.default,
  BaconAlt: () => import_BaconAlt.default,
  Badge: () => import_Badge.default,
  Bandcamp: () => import_Bandcamp.default,
  Bank: () => import_Bank.default,
  Banknote: () => import_Banknote.default,
  BanknoteDollar: () => import_BanknoteDollar.default,
  Banknotes: () => import_Banknotes.default,
  Barbell: () => import_Barbell.default,
  Barcode: () => import_Barcode.default,
  Bash: () => import_Bash.default,
  Bathtub: () => import_Bathtub.default,
  BatteryHorizontalCharging: () => import_BatteryHorizontalCharging.default,
  BatteryHorizontalEmpty: () => import_BatteryHorizontalEmpty.default,
  BatteryHorizontalFull: () => import_BatteryHorizontalFull.default,
  BatteryHorizontalHalf: () => import_BatteryHorizontalHalf.default,
  BatteryHorizontalLow: () => import_BatteryHorizontalLow.default,
  BatteryHorizontalTwoThirds: () => import_BatteryHorizontalTwoThirds.default,
  BatteryHorizontalVeryLow: () => import_BatteryHorizontalVeryLow.default,
  BatteryVerticalCharging: () => import_BatteryVerticalCharging.default,
  BatteryVerticalEmpty: () => import_BatteryVerticalEmpty.default,
  BatteryVerticalFull: () => import_BatteryVerticalFull.default,
  BatteryVerticalHalf: () => import_BatteryVerticalHalf.default,
  BatteryVerticalLow: () => import_BatteryVerticalLow.default,
  BatteryVerticalTwoThirds: () => import_BatteryVerticalTwoThirds.default,
  BatteryVerticalVeryLow: () => import_BatteryVerticalVeryLow.default,
  Beaker: () => import_Beaker.default,
  BeakerAlt: () => import_BeakerAlt.default,
  BeakerEmpty: () => import_BeakerEmpty.default,
  BeakerEmptyAlt: () => import_BeakerEmptyAlt.default,
  Bed: () => import_Bed.default,
  BedLinen: () => import_BedLinen.default,
  BedLinenAlt: () => import_BedLinenAlt.default,
  Beehiiv: () => import_Beehiiv.default,
  Beer: () => import_Beer.default,
  BeerAlt: () => import_BeerAlt.default,
  Behance: () => import_Behance.default,
  Bereal: () => import_Bereal.default,
  Beta: () => import_Beta.default,
  Bike: () => import_Bike.default,
  Binoculars: () => import_Binoculars.default,
  Blanket: () => import_Blanket.default,
  BloodDrop: () => import_BloodDrop.default,
  BloodDropMinus: () => import_BloodDropMinus.default,
  BloodDropPlus: () => import_BloodDropPlus.default,
  BloodPressure: () => import_BloodPressure.default,
  Bluesky: () => import_Bluesky.default,
  Bluetooth: () => import_Bluetooth.default,
  BluetoothConnect: () => import_BluetoothConnect.default,
  BluetoothOff: () => import_BluetoothOff.default,
  BluetoothSignal: () => import_BluetoothSignal.default,
  Boat: () => import_Boat.default,
  BodyFlexibility: () => import_BodyFlexibility.default,
  Book: () => import_Book.default,
  BookOpen: () => import_BookOpen.default,
  Bookmark: () => import_Bookmark.default,
  BookmarkAdd: () => import_BookmarkAdd.default,
  BookmarkCancel: () => import_BookmarkCancel.default,
  BookmarkCheck: () => import_BookmarkCheck.default,
  BookmarkMinus: () => import_BookmarkMinus.default,
  Bootstrap: () => import_Bootstrap.default,
  Brackets: () => import_Brackets.default,
  Breakfast: () => import_Breakfast.default,
  Briefcase: () => import_Briefcase.default,
  BriefcaseAlt: () => import_BriefcaseAlt.default,
  Bug: () => import_Bug.default,
  Building: () => import_Building.default,
  BuildingAlt01: () => import_BuildingAlt01.default,
  BuildingAlt02: () => import_BuildingAlt02.default,
  BuildingAlt03: () => import_BuildingAlt03.default,
  BuildingAlt04: () => import_BuildingAlt04.default,
  BuildingAlt05: () => import_BuildingAlt05.default,
  Burglar: () => import_Burglar.default,
  Bus: () => import_Bus.default,
  BusMini: () => import_BusMini.default,
  BusNight: () => import_BusNight.default,
  C: () => import_C.default,
  CPlusPlus: () => import_CPlusPlus.default,
  CSharp: () => import_CSharp.default,
  CableCar: () => import_CableCar.default,
  Cafe: () => import_Cafe.default,
  Calculator: () => import_Calculator.default,
  Calendar: () => import_Calendar.default,
  CalendarCancel: () => import_CalendarCancel.default,
  CalendarCheck: () => import_CalendarCheck.default,
  CalendarDate: () => import_CalendarDate.default,
  CalendarDates: () => import_CalendarDates.default,
  CalendarLeft: () => import_CalendarLeft.default,
  CalendarMinus: () => import_CalendarMinus.default,
  CalendarOff: () => import_CalendarOff.default,
  CalendarPlus: () => import_CalendarPlus.default,
  CalendarRight: () => import_CalendarRight.default,
  CalendarTime: () => import_CalendarTime.default,
  Camping: () => import_Camping.default,
  Car: () => import_Car.default,
  CarElectric: () => import_CarElectric.default,
  CarbonDioxide: () => import_CarbonDioxide.default,
  CarbonOffset: () => import_CarbonOffset.default,
  Cat: () => import_Cat.default,
  CellTower: () => import_CellTower.default,
  Certificate: () => import_Certificate.default,
  ChargingStation: () => import_ChargingStation.default,
  ChartAppearance: () => import_ChartAppearance.default,
  ChartAppearanceAlt: () => import_ChartAppearanceAlt.default,
  ChartBar: () => import_ChartBar.default,
  ChartBarAlt: () => import_ChartBarAlt.default,
  ChartBarDown: () => import_ChartBarDown.default,
  ChartBarDownAlt: () => import_ChartBarDownAlt.default,
  ChartBarSquare: () => import_ChartBarSquare.default,
  ChartBarSquareDown: () => import_ChartBarSquareDown.default,
  ChartBarSquarePlus: () => import_ChartBarSquarePlus.default,
  ChartBarSquareUp: () => import_ChartBarSquareUp.default,
  ChartBarUp: () => import_ChartBarUp.default,
  ChartBarUpAlt: () => import_ChartBarUpAlt.default,
  ChartDonut: () => import_ChartDonut.default,
  ChartLine: () => import_ChartLine.default,
  ChartLineData: () => import_ChartLineData.default,
  ChartLineDown: () => import_ChartLineDown.default,
  ChartLineSmooth: () => import_ChartLineSmooth.default,
  ChartLineUp: () => import_ChartLineUp.default,
  ChartNumber: () => import_ChartNumber.default,
  ChartPie: () => import_ChartPie.default,
  ChartPieAlt01: () => import_ChartPieAlt01.default,
  ChartPieAlt02: () => import_ChartPieAlt02.default,
  ChartPortfolioBubble: () => import_ChartPortfolioBubble.default,
  ChartRadar: () => import_ChartRadar.default,
  ChartTable: () => import_ChartTable.default,
  Chat: () => import_Chat.default,
  ChatBubble: () => import_ChatBubble.default,
  ChatBubbleAlert: () => import_ChatBubbleAlert.default,
  ChatBubbleCancel: () => import_ChatBubbleCancel.default,
  ChatBubbleCheck: () => import_ChatBubbleCheck.default,
  ChatBubbleDots: () => import_ChatBubbleDots.default,
  ChatBubbleInfo: () => import_ChatBubbleInfo.default,
  ChatBubbleList: () => import_ChatBubbleList.default,
  ChatBubblePlus: () => import_ChatBubblePlus.default,
  ChatBubbleText: () => import_ChatBubbleText.default,
  Check: () => import_Check.default,
  CheckAlt: () => import_CheckAlt.default,
  CheckCircle: () => import_CheckCircle.default,
  CheckCircleAlt01: () => import_CheckCircleAlt01.default,
  CheckCircleAlt02: () => import_CheckCircleAlt02.default,
  CheckCircleAlt03: () => import_CheckCircleAlt03.default,
  CheckDouble: () => import_CheckDouble.default,
  CheckVerified: () => import_CheckVerified.default,
  Checkbox: () => import_Checkbox.default,
  ChevronDown: () => import_ChevronDown.default,
  ChevronDownSmall: () => import_ChevronDownSmall.default,
  ChevronLeft: () => import_ChevronLeft.default,
  ChevronLeftSmall: () => import_ChevronLeftSmall.default,
  ChevronRight: () => import_ChevronRight.default,
  ChevronRightSmall: () => import_ChevronRightSmall.default,
  ChevronUp: () => import_ChevronUp.default,
  ChevronUpSmall: () => import_ChevronUpSmall.default,
  Chicken: () => import_Chicken.default,
  ChickenLeg: () => import_ChickenLeg.default,
  Chip: () => import_Chip.default,
  ChromeCast: () => import_ChromeCast.default,
  Circle: () => import_Circle.default,
  CircleCrossed: () => import_CircleCrossed.default,
  CircleDashed: () => import_CircleDashed.default,
  City: () => import_City.default,
  CityAlt: () => import_CityAlt.default,
  Cleaver: () => import_Cleaver.default,
  Clipboard: () => import_Clipboard.default,
  ClipboardCancel: () => import_ClipboardCancel.default,
  ClipboardCheck: () => import_ClipboardCheck.default,
  ClipboardData: () => import_ClipboardData.default,
  ClipboardEdit: () => import_ClipboardEdit.default,
  ClipboardList: () => import_ClipboardList.default,
  ClipboardMinus: () => import_ClipboardMinus.default,
  ClipboardPlus: () => import_ClipboardPlus.default,
  Close: () => import_Close.default,
  CloseCircle: () => import_CloseCircle.default,
  Closet: () => import_Closet.default,
  Cloud: () => import_Cloud.default,
  CloudAlt01: () => import_CloudAlt01.default,
  CloudAlt02: () => import_CloudAlt02.default,
  CloudOff: () => import_CloudOff.default,
  Clouds: () => import_Clouds.default,
  Cloudy: () => import_Cloudy.default,
  CloudyNight: () => import_CloudyNight.default,
  CloudyPartly: () => import_CloudyPartly.default,
  CloudyPartlyNight: () => import_CloudyPartlyNight.default,
  Clubhouse: () => import_Clubhouse.default,
  Cobra: () => import_Cobra.default,
  Code: () => import_Code.default,
  CodeAlt: () => import_CodeAlt.default,
  CodeBranch: () => import_CodeBranch.default,
  CodeCircle: () => import_CodeCircle.default,
  CodeCommitHorizontal: () => import_CodeCommitHorizontal.default,
  CodeCommitVertical: () => import_CodeCommitVertical.default,
  CodeCompare: () => import_CodeCompare.default,
  CodeDeploy: () => import_CodeDeploy.default,
  CodeFork: () => import_CodeFork.default,
  CodeForkAlt: () => import_CodeForkAlt.default,
  CodeMerge: () => import_CodeMerge.default,
  CodePackage: () => import_CodePackage.default,
  CodePullRequest: () => import_CodePullRequest.default,
  CodeSquare: () => import_CodeSquare.default,
  Codepen: () => import_Codepen.default,
  Coins: () => import_Coins.default,
  CoinsStack: () => import_CoinsStack.default,
  Colors: () => import_Colors.default,
  ColumnPlus: () => import_ColumnPlus.default,
  ColumnsFour: () => import_ColumnsFour.default,
  ColumnsThree: () => import_ColumnsThree.default,
  ColumnsTwo: () => import_ColumnsTwo.default,
  ColumnsTwoAlt: () => import_ColumnsTwoAlt.default,
  Compare: () => import_Compare.default,
  ComponentAccordion: () => import_ComponentAccordion.default,
  ComponentButton: () => import_ComponentButton.default,
  ComponentCard: () => import_ComponentCard.default,
  ComponentCarouselHorizontal: () => import_ComponentCarouselHorizontal.default,
  ComponentCarouselHorizontalAlt: () => import_ComponentCarouselHorizontalAlt.default,
  ComponentCarouselList: () => import_ComponentCarouselList.default,
  ComponentCarouselVertical: () => import_ComponentCarouselVertical.default,
  ComponentCarouselVerticalAlt: () => import_ComponentCarouselVerticalAlt.default,
  ComponentCode: () => import_ComponentCode.default,
  ComponentForm: () => import_ComponentForm.default,
  ComponentTabs: () => import_ComponentTabs.default,
  ConciergeBell: () => import_ConciergeBell.default,
  Conference: () => import_Conference.default,
  Confetti: () => import_Confetti.default,
  Connectivity: () => import_Connectivity.default,
  ConnectivityAlt: () => import_ConnectivityAlt.default,
  ConnectivityLan: () => import_ConnectivityLan.default,
  ConnectivityTenancy: () => import_ConnectivityTenancy.default,
  Console: () => import_Console.default,
  Contra: () => import_Contra.default,
  Copy: () => import_Copy.default,
  CopyAll: () => import_CopyAll.default,
  Cow: () => import_Cow.default,
  Cradle: () => import_Cradle.default,
  CreditCard: () => import_CreditCard.default,
  CreditCardAlt: () => import_CreditCardAlt.default,
  CreditCardCancel: () => import_CreditCardCancel.default,
  CreditCardCancelAlt: () => import_CreditCardCancelAlt.default,
  CreditCardCheck: () => import_CreditCardCheck.default,
  CreditCardCheckAlt: () => import_CreditCardCheckAlt.default,
  CreditCardEdit: () => import_CreditCardEdit.default,
  CreditCardEditAlt: () => import_CreditCardEditAlt.default,
  CreditCardMinus: () => import_CreditCardMinus.default,
  CreditCardMinusAlt: () => import_CreditCardMinusAlt.default,
  CreditCardOff: () => import_CreditCardOff.default,
  CreditCardOffAlt: () => import_CreditCardOffAlt.default,
  CreditCardPlus: () => import_CreditCardPlus.default,
  CreditCardPlusAlt: () => import_CreditCardPlusAlt.default,
  CreditCardProtection: () => import_CreditCardProtection.default,
  CreditCardProtectionAlt: () => import_CreditCardProtectionAlt.default,
  CreditCards: () => import_CreditCards.default,
  Crop: () => import_Crop.default,
  Crown: () => import_Crown.default,
  CrystalBall: () => import_CrystalBall.default,
  Css3: () => import_Css3.default,
  Csv: () => import_Csv.default,
  CsvDownload: () => import_CsvDownload.default,
  CsvFile: () => import_CsvFile.default,
  Cube: () => import_Cube.default,
  CubeAlt: () => import_CubeAlt.default,
  CubeAlt02: () => import_CubeAlt02.default,
  Currency: () => import_Currency.default,
  CurrencyBaht: () => import_CurrencyBaht.default,
  CurrencyDollar: () => import_CurrencyDollar.default,
  CurrencyEuro: () => import_CurrencyEuro.default,
  CurrencyExchange: () => import_CurrencyExchange.default,
  CurrencyLira: () => import_CurrencyLira.default,
  CurrencyPound: () => import_CurrencyPound.default,
  CurrencyRuble: () => import_CurrencyRuble.default,
  CurrencyRupee: () => import_CurrencyRupee.default,
  CurrencyWon: () => import_CurrencyWon.default,
  CurrencyYen: () => import_CurrencyYen.default,
  Cursor: () => import_Cursor.default,
  CursorAlt: () => import_CursorAlt.default,
  CursorArrow: () => import_CursorArrow.default,
  CursorClick: () => import_CursorClick.default,
  CursorCrosshair: () => import_CursorCrosshair.default,
  CursorHand: () => import_CursorHand.default,
  CursorHandAlt: () => import_CursorHandAlt.default,
  CursorPointer: () => import_CursorPointer.default,
  CursorPointerAlt: () => import_CursorPointerAlt.default,
  CursorText: () => import_CursorText.default,
  CustomerSupport: () => import_CustomerSupport.default,
  DataCloud: () => import_DataCloud.default,
  DataCloudCheck: () => import_DataCloudCheck.default,
  DataCloudDownload: () => import_DataCloudDownload.default,
  DataCloudOff: () => import_DataCloudOff.default,
  DataCloudUpload: () => import_DataCloudUpload.default,
  Database: () => import_Database.default,
  DatabaseAlt: () => import_DatabaseAlt.default,
  Delete: () => import_Delete.default,
  Delivery: () => import_Delivery.default,
  DentalChair: () => import_DentalChair.default,
  DentalFloss: () => import_DentalFloss.default,
  DentalForceps: () => import_DentalForceps.default,
  DentalMirror: () => import_DentalMirror.default,
  Deskphone: () => import_Deskphone.default,
  Devices: () => import_Devices.default,
  DevicesAlt: () => import_DevicesAlt.default,
  DiamondGem: () => import_DiamondGem.default,
  Dinner: () => import_Dinner.default,
  Discord: () => import_Discord.default,
  DistributeHorizontalSpacing: () => import_DistributeHorizontalSpacing.default,
  DistributeVerticalSpacing: () => import_DistributeVerticalSpacing.default,
  Django: () => import_Django.default,
  Dna: () => import_Dna.default,
  Docker: () => import_Docker.default,
  Dog: () => import_Dog.default,
  Download: () => import_Download.default,
  DownloadCircle: () => import_DownloadCircle.default,
  DragHandle: () => import_DragHandle.default,
  DragIndicator: () => import_DragIndicator.default,
  DrawingCompass: () => import_DrawingCompass.default,
  Dribbble: () => import_Dribbble.default,
  Drupal: () => import_Drupal.default,
  Ecg: () => import_Ecg.default,
  Edit: () => import_Edit.default,
  EditLine: () => import_EditLine.default,
  EditOff: () => import_EditOff.default,
  EditSquare: () => import_EditSquare.default,
  Eftpos: () => import_Eftpos.default,
  EftposAlt: () => import_EftposAlt.default,
  Egg: () => import_Egg.default,
  EggBoiled: () => import_EggBoiled.default,
  EggCracked: () => import_EggCracked.default,
  Electronjs: () => import_Electronjs.default,
  Elevator: () => import_Elevator.default,
  Elm: () => import_Elm.default,
  Email: () => import_Email.default,
  EmailAlert: () => import_EmailAlert.default,
  EmailAlt: () => import_EmailAlt.default,
  EmailEdit: () => import_EmailEdit.default,
  EmailFast: () => import_EmailFast.default,
  EmailForward: () => import_EmailForward.default,
  EmailNew: () => import_EmailNew.default,
  EmailOpen: () => import_EmailOpen.default,
  EmailOpenAlt: () => import_EmailOpenAlt.default,
  EmailRead: () => import_EmailRead.default,
  EmailVirus: () => import_EmailVirus.default,
  EmergencyHealth: () => import_EmergencyHealth.default,
  EmergencySiren: () => import_EmergencySiren.default,
  Enterprise: () => import_Enterprise.default,
  Equal: () => import_Equal.default,
  EqualNot: () => import_EqualNot.default,
  Erase: () => import_Erase.default,
  Escalator: () => import_Escalator.default,
  Etsy: () => import_Etsy.default,
  Expand: () => import_Expand.default,
  ExpandSidebar: () => import_ExpandSidebar.default,
  Explore: () => import_Explore.default,
  Export: () => import_Export.default,
  Expressjs: () => import_Expressjs.default,
  Eye: () => import_Eye.default,
  EyeOff: () => import_EyeOff.default,
  EyeScan: () => import_EyeScan.default,
  FaceHappy: () => import_FaceHappy.default,
  FaceId: () => import_FaceId.default,
  FaceNeutral: () => import_FaceNeutral.default,
  FaceSad: () => import_FaceSad.default,
  FaceSmile: () => import_FaceSmile.default,
  FaceWink: () => import_FaceWink.default,
  Facebook: () => import_Facebook.default,
  FastBackward: () => import_FastBackward.default,
  FastForward: () => import_FastForward.default,
  Feather: () => import_Feather.default,
  FerrisWheel: () => import_FerrisWheel.default,
  Figma: () => import_Figma.default,
  File: () => import_File.default,
  FileCancel: () => import_FileCancel.default,
  FileCheck: () => import_FileCheck.default,
  FileCode: () => import_FileCode.default,
  FileDownload: () => import_FileDownload.default,
  FileEdit: () => import_FileEdit.default,
  FileList: () => import_FileList.default,
  FileMedical: () => import_FileMedical.default,
  FileMinus: () => import_FileMinus.default,
  FilePlus: () => import_FilePlus.default,
  FileSearch: () => import_FileSearch.default,
  FileText: () => import_FileText.default,
  FileUpload: () => import_FileUpload.default,
  Files: () => import_Files.default,
  Filter: () => import_Filter.default,
  FilterAlt: () => import_FilterAlt.default,
  FilterOff: () => import_FilterOff.default,
  Fingerprint: () => import_Fingerprint.default,
  FingerprintAlt: () => import_FingerprintAlt.default,
  Fire: () => import_Fire.default,
  FireExtinguisher: () => import_FireExtinguisher.default,
  FireOff: () => import_FireOff.default,
  FireTruck: () => import_FireTruck.default,
  Firebase: () => import_Firebase.default,
  Fiverr: () => import_Fiverr.default,
  Flag: () => import_Flag.default,
  FlagAlt: () => import_FlagAlt.default,
  Flame: () => import_Flame.default,
  FlameOff: () => import_FlameOff.default,
  Flash: () => import_Flash.default,
  FlashDouble: () => import_FlashDouble.default,
  FlashOff: () => import_FlashOff.default,
  FlipHorizontal: () => import_FlipHorizontal.default,
  FlipHorizontalAlt: () => import_FlipHorizontalAlt.default,
  FlipVertical: () => import_FlipVertical.default,
  FlipVerticalAlt: () => import_FlipVerticalAlt.default,
  Flutter: () => import_Flutter.default,
  Fog: () => import_Fog.default,
  Folder: () => import_Folder.default,
  FolderBlocked: () => import_FolderBlocked.default,
  FolderCancel: () => import_FolderCancel.default,
  FolderCheck: () => import_FolderCheck.default,
  FolderCode: () => import_FolderCode.default,
  FolderDownload: () => import_FolderDownload.default,
  FolderEdit: () => import_FolderEdit.default,
  FolderLocked: () => import_FolderLocked.default,
  FolderMedical: () => import_FolderMedical.default,
  FolderMinus: () => import_FolderMinus.default,
  FolderOpen: () => import_FolderOpen.default,
  FolderPlus: () => import_FolderPlus.default,
  FolderSearch: () => import_FolderSearch.default,
  FolderUpload: () => import_FolderUpload.default,
  Folders: () => import_Folders.default,
  Framer: () => import_Framer.default,
  GasStation: () => import_GasStation.default,
  GenderFemale: () => import_GenderFemale.default,
  GenderMale: () => import_GenderMale.default,
  GenerateFile: () => import_GenerateFile.default,
  GenerateImage: () => import_GenerateImage.default,
  GenerateText: () => import_GenerateText.default,
  Gift: () => import_Gift.default,
  Giraffe: () => import_Giraffe.default,
  Git: () => import_Git.default,
  Github: () => import_Github.default,
  Gitlab: () => import_Gitlab.default,
  Glasses: () => import_Glasses.default,
  GlassesAlt: () => import_GlassesAlt.default,
  Globe: () => import_Globe.default,
  GlobeAlt01: () => import_GlobeAlt01.default,
  GlobeAlt02: () => import_GlobeAlt02.default,
  Goat: () => import_Goat.default,
  Google: () => import_Google.default,
  GraduationCap: () => import_GraduationCap.default,
  GraduationCapAlt: () => import_GraduationCapAlt.default,
  Grid: () => import_Grid.default,
  GridAlt: () => import_GridAlt.default,
  GridPlus: () => import_GridPlus.default,
  Gumroad: () => import_Gumroad.default,
  Hacker: () => import_Hacker.default,
  HairDryer: () => import_HairDryer.default,
  HalloweenCandle: () => import_HalloweenCandle.default,
  HalloweenCandy: () => import_HalloweenCandy.default,
  HalloweenCat: () => import_HalloweenCat.default,
  HalloweenCauldron: () => import_HalloweenCauldron.default,
  HalloweenCoffin: () => import_HalloweenCoffin.default,
  HalloweenGhost: () => import_HalloweenGhost.default,
  HalloweenLollipop: () => import_HalloweenLollipop.default,
  HalloweenPumpkin: () => import_HalloweenPumpkin.default,
  HalloweenSkull: () => import_HalloweenSkull.default,
  HalloweenSpellbook: () => import_HalloweenSpellbook.default,
  HalloweenSpider: () => import_HalloweenSpider.default,
  HalloweenTomb: () => import_HalloweenTomb.default,
  HalloweenWizardHat: () => import_HalloweenWizardHat.default,
  HandSupport: () => import_HandSupport.default,
  HandsSupport: () => import_HandsSupport.default,
  Hanger: () => import_Hanger.default,
  Hashtag: () => import_Hashtag.default,
  HashtagAlt: () => import_HashtagAlt.default,
  Haze: () => import_Haze.default,
  HazeNight: () => import_HazeNight.default,
  Headphones: () => import_Headphones.default,
  HealthCross: () => import_HealthCross.default,
  HealthServices: () => import_HealthServices.default,
  Heart: () => import_Heart.default,
  HelpCircle: () => import_HelpCircle.default,
  HelpOctagon: () => import_HelpOctagon.default,
  HelpSquare: () => import_HelpSquare.default,
  Hexagon: () => import_Hexagon.default,
  HexagonAlt: () => import_HexagonAlt.default,
  HideSidebar: () => import_HideSidebar.default,
  Home: () => import_Home.default,
  HomeAlt01: () => import_HomeAlt01.default,
  HomeAlt02: () => import_HomeAlt02.default,
  Hospital: () => import_Hospital.default,
  Hotel: () => import_Hotel.default,
  Hourglass: () => import_Hourglass.default,
  Html5: () => import_Html5.default,
  Hurricane: () => import_Hurricane.default,
  IdentificationCard: () => import_IdentificationCard.default,
  Image: () => import_Image.default,
  ImageAlt: () => import_ImageAlt.default,
  ImageCopy: () => import_ImageCopy.default,
  ImageOff: () => import_ImageOff.default,
  ImageOffAlt: () => import_ImageOffAlt.default,
  ImagePlus: () => import_ImagePlus.default,
  Import: () => import_Import.default,
  Inbox: () => import_Inbox.default,
  InboxAlt: () => import_InboxAlt.default,
  InboxIn: () => import_InboxIn.default,
  InboxInAlt: () => import_InboxInAlt.default,
  InboxOut: () => import_InboxOut.default,
  InboxOutAlt: () => import_InboxOutAlt.default,
  Incognito: () => import_Incognito.default,
  Infinity: () => import_Infinity.default,
  InfinityAlt: () => import_InfinityAlt.default,
  InfoCircle: () => import_InfoCircle.default,
  InfoOctagon: () => import_InfoOctagon.default,
  InfoSquare: () => import_InfoSquare.default,
  Instagram: () => import_Instagram.default,
  InteractiveVoiceResponse: () => import_InteractiveVoiceResponse.default,
  InterdentalBrush: () => import_InterdentalBrush.default,
  Invoice: () => import_Invoice.default,
  Iot: () => import_Iot.default,
  IotAlt: () => import_IotAlt.default,
  Java: () => import_Java.default,
  Javascript: () => import_Javascript.default,
  Jpg: () => import_Jpg.default,
  JpgDownload: () => import_JpgDownload.default,
  JpgFile: () => import_JpgFile.default,
  Kettle: () => import_Kettle.default,
  Key: () => import_Key.default,
  KeyAlt: () => import_KeyAlt.default,
  KeyOff: () => import_KeyOff.default,
  KeyOffAlt: () => import_KeyOffAlt.default,
  Keyboard: () => import_Keyboard.default,
  KeyboardOff: () => import_KeyboardOff.default,
  KitchenTools: () => import_KitchenTools.default,
  Knife: () => import_Knife.default,
  KnifeSharpener: () => import_KnifeSharpener.default,
  Kotlin: () => import_Kotlin.default,
  Label: () => import_Label.default,
  LabelImportant: () => import_LabelImportant.default,
  LabelOff: () => import_LabelOff.default,
  LanguageEnglish: () => import_LanguageEnglish.default,
  Laptop: () => import_Laptop.default,
  Layers: () => import_Layers.default,
  LayersTwo: () => import_LayersTwo.default,
  Layout: () => import_Layout.default,
  LayoutAlt01: () => import_LayoutAlt01.default,
  LayoutAlt02: () => import_LayoutAlt02.default,
  LayoutKanban: () => import_LayoutKanban.default,
  Leaf: () => import_Leaf.default,
  Leafs: () => import_Leafs.default,
  Lemonsqueezy: () => import_Lemonsqueezy.default,
  License: () => import_License.default,
  LicenseDraft: () => import_LicenseDraft.default,
  LicenseThirdParty: () => import_LicenseThirdParty.default,
  LightbulbOff: () => import_LightbulbOff.default,
  LightbulbOn: () => import_LightbulbOn.default,
  Lighthouse: () => import_Lighthouse.default,
  Link: () => import_Link.default,
  LinkAlt01: () => import_LinkAlt01.default,
  LinkAlt02: () => import_LinkAlt02.default,
  LinkBroken: () => import_LinkBroken.default,
  LinkBrokenAlt01: () => import_LinkBrokenAlt01.default,
  LinkBrokenAlt02: () => import_LinkBrokenAlt02.default,
  LinkExternal: () => import_LinkExternal.default,
  LinkOff: () => import_LinkOff.default,
  Linkedin: () => import_Linkedin.default,
  Linux: () => import_Linux.default,
  Lion: () => import_Lion.default,
  ListBulleted: () => import_ListBulleted.default,
  ListNumbered: () => import_ListNumbered.default,
  Loan: () => import_Loan.default,
  LocationMy: () => import_LocationMy.default,
  LocationPin: () => import_LocationPin.default,
  LocationPinAlert: () => import_LocationPinAlert.default,
  LocationPinCancel: () => import_LocationPinCancel.default,
  LocationPinCheck: () => import_LocationPinCheck.default,
  LocationPinMinus: () => import_LocationPinMinus.default,
  LocationPinOff: () => import_LocationPinOff.default,
  LocationPinPlus: () => import_LocationPinPlus.default,
  Lock: () => import_Lock.default,
  LockAlt01: () => import_LockAlt01.default,
  LockAlt02: () => import_LockAlt02.default,
  LockOpen: () => import_LockOpen.default,
  LockOpenAlt01: () => import_LockOpenAlt01.default,
  LockOpenAlt02: () => import_LockOpenAlt02.default,
  LogIn: () => import_LogIn.default,
  LogOut: () => import_LogOut.default,
  Lottery: () => import_Lottery.default,
  LoyaltyCard: () => import_LoyaltyCard.default,
  LoyaltyCardAlt: () => import_LoyaltyCardAlt.default,
  LoyaltyCardBarcode: () => import_LoyaltyCardBarcode.default,
  Luggage: () => import_Luggage.default,
  Lunch: () => import_Lunch.default,
  MagicWand: () => import_MagicWand.default,
  MagicWandOff: () => import_MagicWandOff.default,
  Magnet: () => import_Magnet.default,
  Map: () => import_Map.default,
  Mastodon: () => import_Mastodon.default,
  Maximize: () => import_Maximize.default,
  MaximizeAlt01: () => import_MaximizeAlt01.default,
  MaximizeAlt02: () => import_MaximizeAlt02.default,
  MaximizeAlt03: () => import_MaximizeAlt03.default,
  MeatBoxed: () => import_MeatBoxed.default,
  MeatBoxedChicken: () => import_MeatBoxedChicken.default,
  Medication: () => import_Medication.default,
  Medium: () => import_Medium.default,
  MeetAndGreet: () => import_MeetAndGreet.default,
  Menu: () => import_Menu.default,
  MenuAlt01: () => import_MenuAlt01.default,
  MenuAlt02: () => import_MenuAlt02.default,
  MenuAlt03: () => import_MenuAlt03.default,
  MenuClose: () => import_MenuClose.default,
  MergeRight: () => import_MergeRight.default,
  MergeRightAlt: () => import_MergeRightAlt.default,
  MergeUp: () => import_MergeUp.default,
  MergeUpAlt: () => import_MergeUpAlt.default,
  Messenger: () => import_Messenger.default,
  Meta: () => import_Meta.default,
  Microphone: () => import_Microphone.default,
  MicrophoneOff: () => import_MicrophoneOff.default,
  Microscope: () => import_Microscope.default,
  MicrosoftTeams: () => import_MicrosoftTeams.default,
  Microwave: () => import_Microwave.default,
  Milestone: () => import_Milestone.default,
  Minimize: () => import_Minimize.default,
  MinimizeAlt01: () => import_MinimizeAlt01.default,
  Minus: () => import_Minus.default,
  MinusCircle: () => import_MinusCircle.default,
  Mobile: () => import_Mobile.default,
  Monitor: () => import_Monitor.default,
  Monkey: () => import_Monkey.default,
  Moon: () => import_Moon.default,
  MoonAlt: () => import_MoonAlt.default,
  Moped: () => import_Moped.default,
  MoreHorizontal: () => import_MoreHorizontal.default,
  MoreVertical: () => import_MoreVertical.default,
  Mortgage: () => import_Mortgage.default,
  Mouse: () => import_Mouse.default,
  Move: () => import_Move.default,
  MuscleFlex: () => import_MuscleFlex.default,
  Music: () => import_Music.default,
  MusicOff: () => import_MusicOff.default,
  Nachos: () => import_Nachos.default,
  Navigation: () => import_Navigation.default,
  Nextjs: () => import_Nextjs.default,
  Nodejs: () => import_Nodejs.default,
  Notification: () => import_Notification.default,
  NotificationAlert: () => import_NotificationAlert.default,
  NotificationCancel: () => import_NotificationCancel.default,
  NotificationCheck: () => import_NotificationCheck.default,
  NotificationMinus: () => import_NotificationMinus.default,
  NotificationNew: () => import_NotificationNew.default,
  NotificationOff: () => import_NotificationOff.default,
  NotificationPlus: () => import_NotificationPlus.default,
  NotificationRinging: () => import_NotificationRinging.default,
  NotificationSnooze: () => import_NotificationSnooze.default,
  Notion: () => import_Notion.default,
  Npm: () => import_Npm.default,
  Number0: () => import_Number0.default,
  Number1: () => import_Number1.default,
  Number2: () => import_Number2.default,
  Number3: () => import_Number3.default,
  Number4: () => import_Number4.default,
  Number5: () => import_Number5.default,
  Number6: () => import_Number6.default,
  Number7: () => import_Number7.default,
  Number8: () => import_Number8.default,
  Number9: () => import_Number9.default,
  Numbers: () => import_Numbers.default,
  Octagon: () => import_Octagon.default,
  Openai: () => import_Openai.default,
  OriginalSize: () => import_OriginalSize.default,
  Package: () => import_Package.default,
  PackageDelivery: () => import_PackageDelivery.default,
  PackageDeliveryFast: () => import_PackageDeliveryFast.default,
  PaintBrush: () => import_PaintBrush.default,
  PaintBrushAlt: () => import_PaintBrushAlt.default,
  PalmTree: () => import_PalmTree.default,
  Panda: () => import_Panda.default,
  PaperBag: () => import_PaperBag.default,
  Parking: () => import_Parking.default,
  ParkingGarage: () => import_ParkingGarage.default,
  Password: () => import_Password.default,
  Patreon: () => import_Patreon.default,
  PauseCircle: () => import_PauseCircle.default,
  Pdf: () => import_Pdf.default,
  PdfDownload: () => import_PdfDownload.default,
  PdfFile: () => import_PdfFile.default,
  PetFriendly: () => import_PetFriendly.default,
  Phone: () => import_Phone.default,
  PhoneCancel: () => import_PhoneCancel.default,
  PhoneFast: () => import_PhoneFast.default,
  PhoneForward: () => import_PhoneForward.default,
  PhoneIncoming: () => import_PhoneIncoming.default,
  PhoneIncomingForward: () => import_PhoneIncomingForward.default,
  PhoneOff: () => import_PhoneOff.default,
  PhoneOutgoing: () => import_PhoneOutgoing.default,
  PhoneRouting: () => import_PhoneRouting.default,
  PhotoCamera: () => import_PhotoCamera.default,
  PhotoCameraOff: () => import_PhotoCameraOff.default,
  Php: () => import_Php.default,
  Pig: () => import_Pig.default,
  PiggyBank: () => import_PiggyBank.default,
  Pill: () => import_Pill.default,
  PillsAlt01: () => import_PillsAlt01.default,
  PillsAlt02: () => import_PillsAlt02.default,
  Pin: () => import_Pin.default,
  Pinterest: () => import_Pinterest.default,
  Planet: () => import_Planet.default,
  Plaster: () => import_Plaster.default,
  Play: () => import_Play.default,
  PlayCircle: () => import_PlayCircle.default,
  Plug: () => import_Plug.default,
  Plus: () => import_Plus.default,
  PlusCircle: () => import_PlusCircle.default,
  Png: () => import_Png.default,
  PngDownload: () => import_PngDownload.default,
  PngFile: () => import_PngFile.default,
  Podcast: () => import_Podcast.default,
  Pool: () => import_Pool.default,
  Postgresql: () => import_Postgresql.default,
  Printer: () => import_Printer.default,
  PrinterOff: () => import_PrinterOff.default,
  PrivateDriver: () => import_PrivateDriver.default,
  PublicSpeaking: () => import_PublicSpeaking.default,
  PuzzlePiece: () => import_PuzzlePiece.default,
  Python: () => import_Python.default,
  Quora: () => import_Quora.default,
  R: () => import_R.default,
  Rabbit: () => import_Rabbit.default,
  Radar: () => import_Radar.default,
  RadarAlt01: () => import_RadarAlt01.default,
  RadarAlt02: () => import_RadarAlt02.default,
  RadioButton: () => import_RadioButton.default,
  Rain: () => import_Rain.default,
  RainDrizzle: () => import_RainDrizzle.default,
  RainHeavy: () => import_RainHeavy.default,
  Raindrop: () => import_Raindrop.default,
  Raindrops: () => import_Raindrops.default,
  RaindropsAlt: () => import_RaindropsAlt.default,
  React: () => import_React.default,
  Receipt: () => import_Receipt.default,
  ReceiptAlt: () => import_ReceiptAlt.default,
  Recycle: () => import_Recycle.default,
  Redo: () => import_Redo.default,
  Refresh: () => import_Refresh.default,
  RefreshCcw: () => import_RefreshCcw.default,
  RefreshCw: () => import_RefreshCw.default,
  Regenerate: () => import_Regenerate.default,
  Reply: () => import_Reply.default,
  ReplyAll: () => import_ReplyAll.default,
  Restaurant: () => import_Restaurant.default,
  RestaurantMenu: () => import_RestaurantMenu.default,
  Rhino: () => import_Rhino.default,
  Roadmap: () => import_Roadmap.default,
  Robot: () => import_Robot.default,
  Rocket: () => import_Rocket.default,
  RowPlus: () => import_RowPlus.default,
  RowsFour: () => import_RowsFour.default,
  RowsThree: () => import_RowsThree.default,
  RowsTwo: () => import_RowsTwo.default,
  RowsTwoAlt: () => import_RowsTwoAlt.default,
  Ruler: () => import_Ruler.default,
  Sailboat: () => import_Sailboat.default,
  Salami: () => import_Salami.default,
  Sale: () => import_Sale.default,
  SaleAlt: () => import_SaleAlt.default,
  Sausages: () => import_Sausages.default,
  SausagesAlt: () => import_SausagesAlt.default,
  Scale: () => import_Scale.default,
  ScaleBodyWeight: () => import_ScaleBodyWeight.default,
  Scalpel: () => import_Scalpel.default,
  Scooter: () => import_Scooter.default,
  ScooterAlt: () => import_ScooterAlt.default,
  Search: () => import_Search.default,
  SearchAlert: () => import_SearchAlert.default,
  SearchAlt: () => import_SearchAlt.default,
  SearchCancel: () => import_SearchCancel.default,
  SearchCheck: () => import_SearchCheck.default,
  SearchMinus: () => import_SearchMinus.default,
  SearchPlus: () => import_SearchPlus.default,
  SearchProtection: () => import_SearchProtection.default,
  SearchVirus: () => import_SearchVirus.default,
  Seat: () => import_Seat.default,
  SeatChild: () => import_SeatChild.default,
  SeatReclining: () => import_SeatReclining.default,
  SecurityCamera: () => import_SecurityCamera.default,
  Send: () => import_Send.default,
  SendAlt01: () => import_SendAlt01.default,
  SendAlt02: () => import_SendAlt02.default,
  Server: () => import_Server.default,
  ServerAlt: () => import_ServerAlt.default,
  ServerPbx: () => import_ServerPbx.default,
  ServerPbxAlt: () => import_ServerPbxAlt.default,
  Settings: () => import_Settings.default,
  SettingsAdjustHorizontal: () => import_SettingsAdjustHorizontal.default,
  SettingsAdjustVertical: () => import_SettingsAdjustVertical.default,
  SettingsAlt: () => import_SettingsAlt.default,
  ShareAndroid: () => import_ShareAndroid.default,
  ShareIos: () => import_ShareIos.default,
  ShareWindows: () => import_ShareWindows.default,
  Sheep: () => import_Sheep.default,
  Shield: () => import_Shield.default,
  ShieldAlert: () => import_ShieldAlert.default,
  ShieldCancel: () => import_ShieldCancel.default,
  ShieldCheck: () => import_ShieldCheck.default,
  ShieldLock: () => import_ShieldLock.default,
  ShieldMinus: () => import_ShieldMinus.default,
  ShieldOff: () => import_ShieldOff.default,
  ShieldPerson: () => import_ShieldPerson.default,
  ShieldPlus: () => import_ShieldPlus.default,
  ShipSteeringWheel: () => import_ShipSteeringWheel.default,
  ShoppingBag: () => import_ShoppingBag.default,
  ShoppingBagCancel: () => import_ShoppingBagCancel.default,
  ShoppingBagCheck: () => import_ShoppingBagCheck.default,
  ShoppingBagMinus: () => import_ShoppingBagMinus.default,
  ShoppingBagOff: () => import_ShoppingBagOff.default,
  ShoppingBagPlus: () => import_ShoppingBagPlus.default,
  ShoppingBasket: () => import_ShoppingBasket.default,
  ShoppingBasketCancel: () => import_ShoppingBasketCancel.default,
  ShoppingBasketCheck: () => import_ShoppingBasketCheck.default,
  ShoppingBasketMinus: () => import_ShoppingBasketMinus.default,
  ShoppingBasketOff: () => import_ShoppingBasketOff.default,
  ShoppingBasketPlus: () => import_ShoppingBasketPlus.default,
  Shower: () => import_Shower.default,
  Sidebar: () => import_Sidebar.default,
  SidebarAlt: () => import_SidebarAlt.default,
  Sigma: () => import_Sigma.default,
  Signpost: () => import_Signpost.default,
  SimCard: () => import_SimCard.default,
  SkipBack: () => import_SkipBack.default,
  SkipForward: () => import_SkipForward.default,
  Slack: () => import_Slack.default,
  SmartWatch: () => import_SmartWatch.default,
  SmokeDetector: () => import_SmokeDetector.default,
  SmokeFree: () => import_SmokeFree.default,
  Smoking: () => import_Smoking.default,
  Snacks: () => import_Snacks.default,
  Snapchat: () => import_Snapchat.default,
  Snow: () => import_Snow.default,
  Snowflake: () => import_Snowflake.default,
  SnowflakeAlt: () => import_SnowflakeAlt.default,
  Socket: () => import_Socket.default,
  Sofa: () => import_Sofa.default,
  SolarEnergy: () => import_SolarEnergy.default,
  SolarEnergyAlt: () => import_SolarEnergyAlt.default,
  Soundcloud: () => import_Soundcloud.default,
  SpacingHeight: () => import_SpacingHeight.default,
  SpacingWidth: () => import_SpacingWidth.default,
  Sparks: () => import_Sparks.default,
  SparksAlt: () => import_SparksAlt.default,
  Speaker: () => import_Speaker.default,
  Spotify: () => import_Spotify.default,
  Sprout: () => import_Sprout.default,
  Sql: () => import_Sql.default,
  Square: () => import_Square.default,
  SquareDashed: () => import_SquareDashed.default,
  SquareRounded: () => import_SquareRounded.default,
  SquareRoundedDashed: () => import_SquareRoundedDashed.default,
  Stairs: () => import_Stairs.default,
  Stamp: () => import_Stamp.default,
  Star: () => import_Star.default,
  Steak: () => import_Steak.default,
  SteakGrilled: () => import_SteakGrilled.default,
  Steps: () => import_Steps.default,
  StickyNote: () => import_StickyNote.default,
  StopCircle: () => import_StopCircle.default,
  Store: () => import_Store.default,
  Student: () => import_Student.default,
  Substack: () => import_Substack.default,
  Sun: () => import_Sun.default,
  Sunrise: () => import_Sunrise.default,
  Sunset: () => import_Sunset.default,
  Support: () => import_Support.default,
  Surfboard: () => import_Surfboard.default,
  SustainableEnergy: () => import_SustainableEnergy.default,
  Svetle: () => import_Svetle.default,
  Svg: () => import_Svg.default,
  SvgDownload: () => import_SvgDownload.default,
  SvgFile: () => import_SvgFile.default,
  SwapHorizontal: () => import_SwapHorizontal.default,
  SwapVertical: () => import_SwapVertical.default,
  Swift: () => import_Swift.default,
  Switch: () => import_Switch.default,
  Sync: () => import_Sync.default,
  Syringe: () => import_Syringe.default,
  Tablet: () => import_Tablet.default,
  Tag: () => import_Tag.default,
  Tailwind: () => import_Tailwind.default,
  Tapas: () => import_Tapas.default,
  Taxi: () => import_Taxi.default,
  Telegram: () => import_Telegram.default,
  Telescope: () => import_Telescope.default,
  Temperature: () => import_Temperature.default,
  TemperatureCelsius: () => import_TemperatureCelsius.default,
  TemperatureCold: () => import_TemperatureCold.default,
  TemperatureFahrenheit: () => import_TemperatureFahrenheit.default,
  TemperatureHot: () => import_TemperatureHot.default,
  TermDeposit: () => import_TermDeposit.default,
  TermDepositAlt: () => import_TermDepositAlt.default,
  Terminal: () => import_Terminal.default,
  TerminalCircle: () => import_TerminalCircle.default,
  TerminalSquare: () => import_TerminalSquare.default,
  TextBold: () => import_TextBold.default,
  TextClearFormat: () => import_TextClearFormat.default,
  TextColor: () => import_TextColor.default,
  TextFont: () => import_TextFont.default,
  TextItalic: () => import_TextItalic.default,
  TextLetterSpacing: () => import_TextLetterSpacing.default,
  TextLineHeight: () => import_TextLineHeight.default,
  TextStrikethrough: () => import_TextStrikethrough.default,
  TextUnderline: () => import_TextUnderline.default,
  Thermometer: () => import_Thermometer.default,
  Threads: () => import_Threads.default,
  ThumbsDown: () => import_ThumbsDown.default,
  ThumbsUp: () => import_ThumbsUp.default,
  Thunderstorm: () => import_Thunderstorm.default,
  ThunderstormStrong: () => import_ThunderstormStrong.default,
  Ticket: () => import_Ticket.default,
  TicketAlt: () => import_TicketAlt.default,
  TicketOff: () => import_TicketOff.default,
  TicketOffAlt: () => import_TicketOffAlt.default,
  Tiktok: () => import_Tiktok.default,
  Time: () => import_Time.default,
  TimeBack: () => import_TimeBack.default,
  TimeRefresh: () => import_TimeRefresh.default,
  TimeUpdate: () => import_TimeUpdate.default,
  Timer: () => import_Timer.default,
  TimerCancel: () => import_TimerCancel.default,
  TimerCheck: () => import_TimerCheck.default,
  TimerMinus: () => import_TimerMinus.default,
  TimerOff: () => import_TimerOff.default,
  TimerPlus: () => import_TimerPlus.default,
  Toast: () => import_Toast.default,
  ToastButter: () => import_ToastButter.default,
  Toaster: () => import_Toaster.default,
  Toilet: () => import_Toilet.default,
  Tool: () => import_Tool.default,
  ToolAlt: () => import_ToolAlt.default,
  Tooth: () => import_Tooth.default,
  ToothBraces: () => import_ToothBraces.default,
  ToothBridge: () => import_ToothBridge.default,
  ToothCheckUp: () => import_ToothCheckUp.default,
  ToothChipped: () => import_ToothChipped.default,
  ToothClean: () => import_ToothClean.default,
  ToothCrack: () => import_ToothCrack.default,
  ToothCrown: () => import_ToothCrown.default,
  ToothDamaged: () => import_ToothDamaged.default,
  ToothExtraction: () => import_ToothExtraction.default,
  ToothFilling: () => import_ToothFilling.default,
  ToothFissureSealing: () => import_ToothFissureSealing.default,
  ToothGum: () => import_ToothGum.default,
  ToothGumInflammation: () => import_ToothGumInflammation.default,
  ToothGumProtection: () => import_ToothGumProtection.default,
  ToothImplant: () => import_ToothImplant.default,
  ToothImplantCrown: () => import_ToothImplantCrown.default,
  ToothProtection: () => import_ToothProtection.default,
  ToothRootCanal: () => import_ToothRootCanal.default,
  ToothVeneer: () => import_ToothVeneer.default,
  ToothXRay: () => import_ToothXRay.default,
  Toothbrush: () => import_Toothbrush.default,
  ToothbrushAlt: () => import_ToothbrushAlt.default,
  Tornado: () => import_Tornado.default,
  Tos: () => import_Tos.default,
  Tractor: () => import_Tractor.default,
  Train: () => import_Train.default,
  Translate: () => import_Translate.default,
  TranslateAlt: () => import_TranslateAlt.default,
  Trash: () => import_Trash.default,
  TrashAlt: () => import_TrashAlt.default,
  TrashCancel: () => import_TrashCancel.default,
  Tree: () => import_Tree.default,
  TrendDown: () => import_TrendDown.default,
  TrendUp: () => import_TrendUp.default,
  Triangle: () => import_Triangle.default,
  TriangleDashed: () => import_TriangleDashed.default,
  Trophy: () => import_Trophy.default,
  TrophyAlt: () => import_TrophyAlt.default,
  Truck: () => import_Truck.default,
  TumbleDryer: () => import_TumbleDryer.default,
  Tumblr: () => import_Tumblr.default,
  TuneHorizontal: () => import_TuneHorizontal.default,
  TuneHorizontalAlt: () => import_TuneHorizontalAlt.default,
  TuneVertical: () => import_TuneVertical.default,
  TuneVerticalAlt: () => import_TuneVerticalAlt.default,
  Tv: () => import_Tv.default,
  Twitch: () => import_Twitch.default,
  Twitter: () => import_Twitter.default,
  Typescript: () => import_Typescript.default,
  Umbrella: () => import_Umbrella.default,
  UmbrellaAlt01: () => import_UmbrellaAlt01.default,
  UmbrellaAlt02: () => import_UmbrellaAlt02.default,
  Unarchive: () => import_Unarchive.default,
  Undo: () => import_Undo.default,
  UnfoldLess: () => import_UnfoldLess.default,
  UnfoldMore: () => import_UnfoldMore.default,
  Unity: () => import_Unity.default,
  Upload: () => import_Upload.default,
  UploadCircle: () => import_UploadCircle.default,
  Usb: () => import_Usb.default,
  UsbOff: () => import_UsbOff.default,
  UsbStick: () => import_UsbStick.default,
  User: () => import_User.default,
  UserAlert: () => import_UserAlert.default,
  UserCancel: () => import_UserCancel.default,
  UserCheck: () => import_UserCheck.default,
  UserCircle: () => import_UserCircle.default,
  UserEdit: () => import_UserEdit.default,
  UserEmail: () => import_UserEmail.default,
  UserFavorite: () => import_UserFavorite.default,
  UserMinus: () => import_UserMinus.default,
  UserOff: () => import_UserOff.default,
  UserPlus: () => import_UserPlus.default,
  UserSettings: () => import_UserSettings.default,
  Users: () => import_Users.default,
  UsersEvent: () => import_UsersEvent.default,
  UsersGroup: () => import_UsersGroup.default,
  Vacation: () => import_Vacation.default,
  Vault: () => import_Vault.default,
  VideoCamera: () => import_VideoCamera.default,
  VideoCameraOff: () => import_VideoCameraOff.default,
  VideoCameraPlus: () => import_VideoCameraPlus.default,
  Virus: () => import_Virus.default,
  Visualstudio: () => import_Visualstudio.default,
  VoiceRecording: () => import_VoiceRecording.default,
  VoiceRecordingAlt: () => import_VoiceRecordingAlt.default,
  Voicemail: () => import_Voicemail.default,
  Volume: () => import_Volume.default,
  VolumeCancel: () => import_VolumeCancel.default,
  VolumeMax: () => import_VolumeMax.default,
  VolumeMin: () => import_VolumeMin.default,
  VolumeOff: () => import_VolumeOff.default,
  VoucherFood: () => import_VoucherFood.default,
  Vuejs: () => import_Vuejs.default,
  Wallet: () => import_Wallet.default,
  WalletAlt01: () => import_WalletAlt01.default,
  WalletAlt02: () => import_WalletAlt02.default,
  WalletAlt03: () => import_WalletAlt03.default,
  WashingMachine: () => import_WashingMachine.default,
  WaterDrop: () => import_WaterDrop.default,
  WaterGlass: () => import_WaterGlass.default,
  WaterWaveBig: () => import_WaterWaveBig.default,
  WaterWaves: () => import_WaterWaves.default,
  Wc: () => import_Wc.default,
  Webcam: () => import_Webcam.default,
  Weight: () => import_Weight.default,
  Wheelchair: () => import_Wheelchair.default,
  Whiteboard: () => import_Whiteboard.default,
  Wifi: () => import_Wifi.default,
  WifiOff: () => import_WifiOff.default,
  Wind: () => import_Wind.default,
  WindEnergy: () => import_WindEnergy.default,
  WindEnergyAlt: () => import_WindEnergyAlt.default,
  WindStrong: () => import_WindStrong.default,
  X: () => import_X.default,
  Xing: () => import_Xing.default,
  Xls: () => import_Xls.default,
  XlsDownload: () => import_XlsDownload.default,
  XlsFile: () => import_XlsFile.default,
  Youtube: () => import_Youtube.default
});
module.exports = __toCommonJS(index_exports);
var import_Activity = __toESM(require("./icons/Activity"));
var import_AddressBook = __toESM(require("./icons/AddressBook"));
var import_AirConditioner = __toESM(require("./icons/AirConditioner"));
var import_Airbnb = __toESM(require("./icons/Airbnb"));
var import_AirplaneAlt01 = __toESM(require("./icons/AirplaneAlt01"));
var import_AirplaneAlt02 = __toESM(require("./icons/AirplaneAlt02"));
var import_Airplane = __toESM(require("./icons/Airplane"));
var import_Airplay = __toESM(require("./icons/Airplay"));
var import_AlarmCancel = __toESM(require("./icons/AlarmCancel"));
var import_AlarmCheck = __toESM(require("./icons/AlarmCheck"));
var import_AlarmMinus = __toESM(require("./icons/AlarmMinus"));
var import_AlarmOff = __toESM(require("./icons/AlarmOff"));
var import_AlarmPlus = __toESM(require("./icons/AlarmPlus"));
var import_AlarmSnooze = __toESM(require("./icons/AlarmSnooze"));
var import_Alarm = __toESM(require("./icons/Alarm"));
var import_AlertCircle = __toESM(require("./icons/AlertCircle"));
var import_AlertOctagon = __toESM(require("./icons/AlertOctagon"));
var import_AlertSquare = __toESM(require("./icons/AlertSquare"));
var import_AlertTriangle = __toESM(require("./icons/AlertTriangle"));
var import_AlignBottom = __toESM(require("./icons/AlignBottom"));
var import_AlignHorizontalCenter = __toESM(require("./icons/AlignHorizontalCenter"));
var import_AlignLeft = __toESM(require("./icons/AlignLeft"));
var import_AlignRight = __toESM(require("./icons/AlignRight"));
var import_AlignTextCenter = __toESM(require("./icons/AlignTextCenter"));
var import_AlignTextJustifyAll = __toESM(require("./icons/AlignTextJustifyAll"));
var import_AlignTextJustifyCenter = __toESM(require("./icons/AlignTextJustifyCenter"));
var import_AlignTextJustifyLeft = __toESM(require("./icons/AlignTextJustifyLeft"));
var import_AlignTextJustifyRight = __toESM(require("./icons/AlignTextJustifyRight"));
var import_AlignTextLeft = __toESM(require("./icons/AlignTextLeft"));
var import_AlignTextRight = __toESM(require("./icons/AlignTextRight"));
var import_AlignTop = __toESM(require("./icons/AlignTop"));
var import_AlignVerticalCenter = __toESM(require("./icons/AlignVerticalCenter"));
var import_Alpha = __toESM(require("./icons/Alpha"));
var import_AnalyzeVoice = __toESM(require("./icons/AnalyzeVoice"));
var import_Anchor = __toESM(require("./icons/Anchor"));
var import_Android = __toESM(require("./icons/Android"));
var import_Angularjs = __toESM(require("./icons/Angularjs"));
var import_AnnotationAlert = __toESM(require("./icons/AnnotationAlert"));
var import_AnnotationCheck = __toESM(require("./icons/AnnotationCheck"));
var import_AnnotationDots = __toESM(require("./icons/AnnotationDots"));
var import_AnnotationInfo = __toESM(require("./icons/AnnotationInfo"));
var import_AnnotationPlus = __toESM(require("./icons/AnnotationPlus"));
var import_AnnotationQuestion = __toESM(require("./icons/AnnotationQuestion"));
var import_AnnotationText = __toESM(require("./icons/AnnotationText"));
var import_Annotation = __toESM(require("./icons/Annotation"));
var import_AnnouncementAlt01 = __toESM(require("./icons/AnnouncementAlt01"));
var import_AnnouncementAlt02 = __toESM(require("./icons/AnnouncementAlt02"));
var import_Announcement = __toESM(require("./icons/Announcement"));
var import_Apple = __toESM(require("./icons/Apple"));
var import_Apps = __toESM(require("./icons/Apps"));
var import_Apron = __toESM(require("./icons/Apron"));
var import_Archive = __toESM(require("./icons/Archive"));
var import_ArrowCircleDownLeft = __toESM(require("./icons/ArrowCircleDownLeft"));
var import_ArrowCircleDownRight = __toESM(require("./icons/ArrowCircleDownRight"));
var import_ArrowCircleDown = __toESM(require("./icons/ArrowCircleDown"));
var import_ArrowCircleLeft = __toESM(require("./icons/ArrowCircleLeft"));
var import_ArrowCircleRight = __toESM(require("./icons/ArrowCircleRight"));
var import_ArrowCircleUpLeft = __toESM(require("./icons/ArrowCircleUpLeft"));
var import_ArrowCircleUpRight = __toESM(require("./icons/ArrowCircleUpRight"));
var import_ArrowCircleUp = __toESM(require("./icons/ArrowCircleUp"));
var import_ArrowDownLeft = __toESM(require("./icons/ArrowDownLeft"));
var import_ArrowDownRight = __toESM(require("./icons/ArrowDownRight"));
var import_ArrowDown = __toESM(require("./icons/ArrowDown"));
var import_ArrowElbowDownLeft = __toESM(require("./icons/ArrowElbowDownLeft"));
var import_ArrowElbowDownRight = __toESM(require("./icons/ArrowElbowDownRight"));
var import_ArrowElbowLeftDown = __toESM(require("./icons/ArrowElbowLeftDown"));
var import_ArrowElbowLeftUp = __toESM(require("./icons/ArrowElbowLeftUp"));
var import_ArrowElbowRightDown = __toESM(require("./icons/ArrowElbowRightDown"));
var import_ArrowElbowRightUp = __toESM(require("./icons/ArrowElbowRightUp"));
var import_ArrowElbowUpLeft = __toESM(require("./icons/ArrowElbowUpLeft"));
var import_ArrowElbowUpRight = __toESM(require("./icons/ArrowElbowUpRight"));
var import_ArrowLeft = __toESM(require("./icons/ArrowLeft"));
var import_ArrowRight = __toESM(require("./icons/ArrowRight"));
var import_ArrowSplitDownAlt = __toESM(require("./icons/ArrowSplitDownAlt"));
var import_ArrowSplitDown = __toESM(require("./icons/ArrowSplitDown"));
var import_ArrowSplitLeftAlt = __toESM(require("./icons/ArrowSplitLeftAlt"));
var import_ArrowSplitLeft = __toESM(require("./icons/ArrowSplitLeft"));
var import_ArrowSplitRightAlt = __toESM(require("./icons/ArrowSplitRightAlt"));
var import_ArrowSplitRight = __toESM(require("./icons/ArrowSplitRight"));
var import_ArrowSplitUpAlt = __toESM(require("./icons/ArrowSplitUpAlt"));
var import_ArrowSplitUp = __toESM(require("./icons/ArrowSplitUp"));
var import_ArrowUpLeft = __toESM(require("./icons/ArrowUpLeft"));
var import_ArrowUpRight = __toESM(require("./icons/ArrowUpRight"));
var import_ArrowUp = __toESM(require("./icons/ArrowUp"));
var import_At = __toESM(require("./icons/At"));
var import_Atm = __toESM(require("./icons/Atm"));
var import_AtomEditor = __toESM(require("./icons/AtomEditor"));
var import_Atom = __toESM(require("./icons/Atom"));
var import_AttachmentAlt01 = __toESM(require("./icons/AttachmentAlt01"));
var import_AttachmentAlt02 = __toESM(require("./icons/AttachmentAlt02"));
var import_Attachment = __toESM(require("./icons/Attachment"));
var import_Australia = __toESM(require("./icons/Australia"));
var import_BabyChanging = __toESM(require("./icons/BabyChanging"));
var import_BackpackAlt = __toESM(require("./icons/BackpackAlt"));
var import_Backpack = __toESM(require("./icons/Backpack"));
var import_BaconAlt = __toESM(require("./icons/BaconAlt"));
var import_Bacon = __toESM(require("./icons/Bacon"));
var import_Badge = __toESM(require("./icons/Badge"));
var import_Bandcamp = __toESM(require("./icons/Bandcamp"));
var import_Bank = __toESM(require("./icons/Bank"));
var import_BanknoteDollar = __toESM(require("./icons/BanknoteDollar"));
var import_Banknote = __toESM(require("./icons/Banknote"));
var import_Banknotes = __toESM(require("./icons/Banknotes"));
var import_Barbell = __toESM(require("./icons/Barbell"));
var import_Barcode = __toESM(require("./icons/Barcode"));
var import_Bash = __toESM(require("./icons/Bash"));
var import_Bathtub = __toESM(require("./icons/Bathtub"));
var import_BatteryHorizontalCharging = __toESM(require("./icons/BatteryHorizontalCharging"));
var import_BatteryHorizontalEmpty = __toESM(require("./icons/BatteryHorizontalEmpty"));
var import_BatteryHorizontalFull = __toESM(require("./icons/BatteryHorizontalFull"));
var import_BatteryHorizontalHalf = __toESM(require("./icons/BatteryHorizontalHalf"));
var import_BatteryHorizontalLow = __toESM(require("./icons/BatteryHorizontalLow"));
var import_BatteryHorizontalTwoThirds = __toESM(require("./icons/BatteryHorizontalTwoThirds"));
var import_BatteryHorizontalVeryLow = __toESM(require("./icons/BatteryHorizontalVeryLow"));
var import_BatteryVerticalCharging = __toESM(require("./icons/BatteryVerticalCharging"));
var import_BatteryVerticalEmpty = __toESM(require("./icons/BatteryVerticalEmpty"));
var import_BatteryVerticalFull = __toESM(require("./icons/BatteryVerticalFull"));
var import_BatteryVerticalHalf = __toESM(require("./icons/BatteryVerticalHalf"));
var import_BatteryVerticalLow = __toESM(require("./icons/BatteryVerticalLow"));
var import_BatteryVerticalTwoThirds = __toESM(require("./icons/BatteryVerticalTwoThirds"));
var import_BatteryVerticalVeryLow = __toESM(require("./icons/BatteryVerticalVeryLow"));
var import_BeakerAlt = __toESM(require("./icons/BeakerAlt"));
var import_BeakerEmptyAlt = __toESM(require("./icons/BeakerEmptyAlt"));
var import_BeakerEmpty = __toESM(require("./icons/BeakerEmpty"));
var import_Beaker = __toESM(require("./icons/Beaker"));
var import_BedLinenAlt = __toESM(require("./icons/BedLinenAlt"));
var import_BedLinen = __toESM(require("./icons/BedLinen"));
var import_Bed = __toESM(require("./icons/Bed"));
var import_Beehiiv = __toESM(require("./icons/Beehiiv"));
var import_BeerAlt = __toESM(require("./icons/BeerAlt"));
var import_Beer = __toESM(require("./icons/Beer"));
var import_Behance = __toESM(require("./icons/Behance"));
var import_Bereal = __toESM(require("./icons/Bereal"));
var import_Beta = __toESM(require("./icons/Beta"));
var import_Bike = __toESM(require("./icons/Bike"));
var import_Binoculars = __toESM(require("./icons/Binoculars"));
var import_Blanket = __toESM(require("./icons/Blanket"));
var import_BloodDropMinus = __toESM(require("./icons/BloodDropMinus"));
var import_BloodDropPlus = __toESM(require("./icons/BloodDropPlus"));
var import_BloodDrop = __toESM(require("./icons/BloodDrop"));
var import_BloodPressure = __toESM(require("./icons/BloodPressure"));
var import_Bluesky = __toESM(require("./icons/Bluesky"));
var import_BluetoothConnect = __toESM(require("./icons/BluetoothConnect"));
var import_BluetoothOff = __toESM(require("./icons/BluetoothOff"));
var import_BluetoothSignal = __toESM(require("./icons/BluetoothSignal"));
var import_Bluetooth = __toESM(require("./icons/Bluetooth"));
var import_Boat = __toESM(require("./icons/Boat"));
var import_BodyFlexibility = __toESM(require("./icons/BodyFlexibility"));
var import_BookOpen = __toESM(require("./icons/BookOpen"));
var import_Book = __toESM(require("./icons/Book"));
var import_BookmarkAdd = __toESM(require("./icons/BookmarkAdd"));
var import_BookmarkCancel = __toESM(require("./icons/BookmarkCancel"));
var import_BookmarkCheck = __toESM(require("./icons/BookmarkCheck"));
var import_BookmarkMinus = __toESM(require("./icons/BookmarkMinus"));
var import_Bookmark = __toESM(require("./icons/Bookmark"));
var import_Bootstrap = __toESM(require("./icons/Bootstrap"));
var import_Brackets = __toESM(require("./icons/Brackets"));
var import_Breakfast = __toESM(require("./icons/Breakfast"));
var import_BriefcaseAlt = __toESM(require("./icons/BriefcaseAlt"));
var import_Briefcase = __toESM(require("./icons/Briefcase"));
var import_Bug = __toESM(require("./icons/Bug"));
var import_BuildingAlt01 = __toESM(require("./icons/BuildingAlt01"));
var import_BuildingAlt02 = __toESM(require("./icons/BuildingAlt02"));
var import_BuildingAlt03 = __toESM(require("./icons/BuildingAlt03"));
var import_BuildingAlt04 = __toESM(require("./icons/BuildingAlt04"));
var import_BuildingAlt05 = __toESM(require("./icons/BuildingAlt05"));
var import_Building = __toESM(require("./icons/Building"));
var import_Burglar = __toESM(require("./icons/Burglar"));
var import_BusMini = __toESM(require("./icons/BusMini"));
var import_BusNight = __toESM(require("./icons/BusNight"));
var import_Bus = __toESM(require("./icons/Bus"));
var import_CPlusPlus = __toESM(require("./icons/CPlusPlus"));
var import_CSharp = __toESM(require("./icons/CSharp"));
var import_C = __toESM(require("./icons/C"));
var import_CableCar = __toESM(require("./icons/CableCar"));
var import_Cafe = __toESM(require("./icons/Cafe"));
var import_Calculator = __toESM(require("./icons/Calculator"));
var import_CalendarCancel = __toESM(require("./icons/CalendarCancel"));
var import_CalendarCheck = __toESM(require("./icons/CalendarCheck"));
var import_CalendarDate = __toESM(require("./icons/CalendarDate"));
var import_CalendarDates = __toESM(require("./icons/CalendarDates"));
var import_CalendarLeft = __toESM(require("./icons/CalendarLeft"));
var import_CalendarMinus = __toESM(require("./icons/CalendarMinus"));
var import_CalendarOff = __toESM(require("./icons/CalendarOff"));
var import_CalendarPlus = __toESM(require("./icons/CalendarPlus"));
var import_CalendarRight = __toESM(require("./icons/CalendarRight"));
var import_CalendarTime = __toESM(require("./icons/CalendarTime"));
var import_Calendar = __toESM(require("./icons/Calendar"));
var import_Camping = __toESM(require("./icons/Camping"));
var import_CarElectric = __toESM(require("./icons/CarElectric"));
var import_Car = __toESM(require("./icons/Car"));
var import_CarbonDioxide = __toESM(require("./icons/CarbonDioxide"));
var import_CarbonOffset = __toESM(require("./icons/CarbonOffset"));
var import_Cat = __toESM(require("./icons/Cat"));
var import_CellTower = __toESM(require("./icons/CellTower"));
var import_Certificate = __toESM(require("./icons/Certificate"));
var import_ChargingStation = __toESM(require("./icons/ChargingStation"));
var import_ChartAppearanceAlt = __toESM(require("./icons/ChartAppearanceAlt"));
var import_ChartAppearance = __toESM(require("./icons/ChartAppearance"));
var import_ChartBarAlt = __toESM(require("./icons/ChartBarAlt"));
var import_ChartBarDownAlt = __toESM(require("./icons/ChartBarDownAlt"));
var import_ChartBarDown = __toESM(require("./icons/ChartBarDown"));
var import_ChartBarSquareDown = __toESM(require("./icons/ChartBarSquareDown"));
var import_ChartBarSquarePlus = __toESM(require("./icons/ChartBarSquarePlus"));
var import_ChartBarSquareUp = __toESM(require("./icons/ChartBarSquareUp"));
var import_ChartBarSquare = __toESM(require("./icons/ChartBarSquare"));
var import_ChartBarUpAlt = __toESM(require("./icons/ChartBarUpAlt"));
var import_ChartBarUp = __toESM(require("./icons/ChartBarUp"));
var import_ChartBar = __toESM(require("./icons/ChartBar"));
var import_ChartDonut = __toESM(require("./icons/ChartDonut"));
var import_ChartLineData = __toESM(require("./icons/ChartLineData"));
var import_ChartLineDown = __toESM(require("./icons/ChartLineDown"));
var import_ChartLineSmooth = __toESM(require("./icons/ChartLineSmooth"));
var import_ChartLineUp = __toESM(require("./icons/ChartLineUp"));
var import_ChartLine = __toESM(require("./icons/ChartLine"));
var import_ChartNumber = __toESM(require("./icons/ChartNumber"));
var import_ChartPieAlt01 = __toESM(require("./icons/ChartPieAlt01"));
var import_ChartPieAlt02 = __toESM(require("./icons/ChartPieAlt02"));
var import_ChartPie = __toESM(require("./icons/ChartPie"));
var import_ChartPortfolioBubble = __toESM(require("./icons/ChartPortfolioBubble"));
var import_ChartRadar = __toESM(require("./icons/ChartRadar"));
var import_ChartTable = __toESM(require("./icons/ChartTable"));
var import_ChatBubbleAlert = __toESM(require("./icons/ChatBubbleAlert"));
var import_ChatBubbleCancel = __toESM(require("./icons/ChatBubbleCancel"));
var import_ChatBubbleCheck = __toESM(require("./icons/ChatBubbleCheck"));
var import_ChatBubbleDots = __toESM(require("./icons/ChatBubbleDots"));
var import_ChatBubbleInfo = __toESM(require("./icons/ChatBubbleInfo"));
var import_ChatBubbleList = __toESM(require("./icons/ChatBubbleList"));
var import_ChatBubblePlus = __toESM(require("./icons/ChatBubblePlus"));
var import_ChatBubbleText = __toESM(require("./icons/ChatBubbleText"));
var import_ChatBubble = __toESM(require("./icons/ChatBubble"));
var import_Chat = __toESM(require("./icons/Chat"));
var import_CheckAlt = __toESM(require("./icons/CheckAlt"));
var import_CheckCircleAlt01 = __toESM(require("./icons/CheckCircleAlt01"));
var import_CheckCircleAlt02 = __toESM(require("./icons/CheckCircleAlt02"));
var import_CheckCircleAlt03 = __toESM(require("./icons/CheckCircleAlt03"));
var import_CheckCircle = __toESM(require("./icons/CheckCircle"));
var import_CheckDouble = __toESM(require("./icons/CheckDouble"));
var import_CheckVerified = __toESM(require("./icons/CheckVerified"));
var import_Check = __toESM(require("./icons/Check"));
var import_Checkbox = __toESM(require("./icons/Checkbox"));
var import_ChevronDownSmall = __toESM(require("./icons/ChevronDownSmall"));
var import_ChevronDown = __toESM(require("./icons/ChevronDown"));
var import_ChevronLeftSmall = __toESM(require("./icons/ChevronLeftSmall"));
var import_ChevronLeft = __toESM(require("./icons/ChevronLeft"));
var import_ChevronRightSmall = __toESM(require("./icons/ChevronRightSmall"));
var import_ChevronRight = __toESM(require("./icons/ChevronRight"));
var import_ChevronUpSmall = __toESM(require("./icons/ChevronUpSmall"));
var import_ChevronUp = __toESM(require("./icons/ChevronUp"));
var import_ChickenLeg = __toESM(require("./icons/ChickenLeg"));
var import_Chicken = __toESM(require("./icons/Chicken"));
var import_Chip = __toESM(require("./icons/Chip"));
var import_ChromeCast = __toESM(require("./icons/ChromeCast"));
var import_CircleCrossed = __toESM(require("./icons/CircleCrossed"));
var import_CircleDashed = __toESM(require("./icons/CircleDashed"));
var import_Circle = __toESM(require("./icons/Circle"));
var import_CityAlt = __toESM(require("./icons/CityAlt"));
var import_City = __toESM(require("./icons/City"));
var import_Cleaver = __toESM(require("./icons/Cleaver"));
var import_ClipboardCancel = __toESM(require("./icons/ClipboardCancel"));
var import_ClipboardCheck = __toESM(require("./icons/ClipboardCheck"));
var import_ClipboardData = __toESM(require("./icons/ClipboardData"));
var import_ClipboardEdit = __toESM(require("./icons/ClipboardEdit"));
var import_ClipboardList = __toESM(require("./icons/ClipboardList"));
var import_ClipboardMinus = __toESM(require("./icons/ClipboardMinus"));
var import_ClipboardPlus = __toESM(require("./icons/ClipboardPlus"));
var import_Clipboard = __toESM(require("./icons/Clipboard"));
var import_CloseCircle = __toESM(require("./icons/CloseCircle"));
var import_Close = __toESM(require("./icons/Close"));
var import_Closet = __toESM(require("./icons/Closet"));
var import_CloudAlt01 = __toESM(require("./icons/CloudAlt01"));
var import_CloudAlt02 = __toESM(require("./icons/CloudAlt02"));
var import_CloudOff = __toESM(require("./icons/CloudOff"));
var import_Cloud = __toESM(require("./icons/Cloud"));
var import_Clouds = __toESM(require("./icons/Clouds"));
var import_CloudyNight = __toESM(require("./icons/CloudyNight"));
var import_CloudyPartlyNight = __toESM(require("./icons/CloudyPartlyNight"));
var import_CloudyPartly = __toESM(require("./icons/CloudyPartly"));
var import_Cloudy = __toESM(require("./icons/Cloudy"));
var import_Clubhouse = __toESM(require("./icons/Clubhouse"));
var import_Cobra = __toESM(require("./icons/Cobra"));
var import_CodeAlt = __toESM(require("./icons/CodeAlt"));
var import_CodeBranch = __toESM(require("./icons/CodeBranch"));
var import_CodeCircle = __toESM(require("./icons/CodeCircle"));
var import_CodeCommitHorizontal = __toESM(require("./icons/CodeCommitHorizontal"));
var import_CodeCommitVertical = __toESM(require("./icons/CodeCommitVertical"));
var import_CodeCompare = __toESM(require("./icons/CodeCompare"));
var import_CodeDeploy = __toESM(require("./icons/CodeDeploy"));
var import_CodeForkAlt = __toESM(require("./icons/CodeForkAlt"));
var import_CodeFork = __toESM(require("./icons/CodeFork"));
var import_CodeMerge = __toESM(require("./icons/CodeMerge"));
var import_CodePackage = __toESM(require("./icons/CodePackage"));
var import_CodePullRequest = __toESM(require("./icons/CodePullRequest"));
var import_CodeSquare = __toESM(require("./icons/CodeSquare"));
var import_Code = __toESM(require("./icons/Code"));
var import_Codepen = __toESM(require("./icons/Codepen"));
var import_CoinsStack = __toESM(require("./icons/CoinsStack"));
var import_Coins = __toESM(require("./icons/Coins"));
var import_Colors = __toESM(require("./icons/Colors"));
var import_ColumnPlus = __toESM(require("./icons/ColumnPlus"));
var import_ColumnsFour = __toESM(require("./icons/ColumnsFour"));
var import_ColumnsThree = __toESM(require("./icons/ColumnsThree"));
var import_ColumnsTwoAlt = __toESM(require("./icons/ColumnsTwoAlt"));
var import_ColumnsTwo = __toESM(require("./icons/ColumnsTwo"));
var import_Compare = __toESM(require("./icons/Compare"));
var import_ComponentAccordion = __toESM(require("./icons/ComponentAccordion"));
var import_ComponentButton = __toESM(require("./icons/ComponentButton"));
var import_ComponentCard = __toESM(require("./icons/ComponentCard"));
var import_ComponentCarouselHorizontalAlt = __toESM(require("./icons/ComponentCarouselHorizontalAlt"));
var import_ComponentCarouselHorizontal = __toESM(require("./icons/ComponentCarouselHorizontal"));
var import_ComponentCarouselList = __toESM(require("./icons/ComponentCarouselList"));
var import_ComponentCarouselVerticalAlt = __toESM(require("./icons/ComponentCarouselVerticalAlt"));
var import_ComponentCarouselVertical = __toESM(require("./icons/ComponentCarouselVertical"));
var import_ComponentCode = __toESM(require("./icons/ComponentCode"));
var import_ComponentForm = __toESM(require("./icons/ComponentForm"));
var import_ComponentTabs = __toESM(require("./icons/ComponentTabs"));
var import_ConciergeBell = __toESM(require("./icons/ConciergeBell"));
var import_Conference = __toESM(require("./icons/Conference"));
var import_Confetti = __toESM(require("./icons/Confetti"));
var import_ConnectivityAlt = __toESM(require("./icons/ConnectivityAlt"));
var import_ConnectivityLan = __toESM(require("./icons/ConnectivityLan"));
var import_ConnectivityTenancy = __toESM(require("./icons/ConnectivityTenancy"));
var import_Connectivity = __toESM(require("./icons/Connectivity"));
var import_Console = __toESM(require("./icons/Console"));
var import_Contra = __toESM(require("./icons/Contra"));
var import_CopyAll = __toESM(require("./icons/CopyAll"));
var import_Copy = __toESM(require("./icons/Copy"));
var import_Cow = __toESM(require("./icons/Cow"));
var import_Cradle = __toESM(require("./icons/Cradle"));
var import_CreditCardAlt = __toESM(require("./icons/CreditCardAlt"));
var import_CreditCardCancelAlt = __toESM(require("./icons/CreditCardCancelAlt"));
var import_CreditCardCancel = __toESM(require("./icons/CreditCardCancel"));
var import_CreditCardCheckAlt = __toESM(require("./icons/CreditCardCheckAlt"));
var import_CreditCardCheck = __toESM(require("./icons/CreditCardCheck"));
var import_CreditCardEditAlt = __toESM(require("./icons/CreditCardEditAlt"));
var import_CreditCardEdit = __toESM(require("./icons/CreditCardEdit"));
var import_CreditCardMinusAlt = __toESM(require("./icons/CreditCardMinusAlt"));
var import_CreditCardMinus = __toESM(require("./icons/CreditCardMinus"));
var import_CreditCardOffAlt = __toESM(require("./icons/CreditCardOffAlt"));
var import_CreditCardOff = __toESM(require("./icons/CreditCardOff"));
var import_CreditCardPlusAlt = __toESM(require("./icons/CreditCardPlusAlt"));
var import_CreditCardPlus = __toESM(require("./icons/CreditCardPlus"));
var import_CreditCardProtectionAlt = __toESM(require("./icons/CreditCardProtectionAlt"));
var import_CreditCardProtection = __toESM(require("./icons/CreditCardProtection"));
var import_CreditCard = __toESM(require("./icons/CreditCard"));
var import_CreditCards = __toESM(require("./icons/CreditCards"));
var import_Crop = __toESM(require("./icons/Crop"));
var import_Crown = __toESM(require("./icons/Crown"));
var import_CrystalBall = __toESM(require("./icons/CrystalBall"));
var import_Css3 = __toESM(require("./icons/Css3"));
var import_CsvDownload = __toESM(require("./icons/CsvDownload"));
var import_CsvFile = __toESM(require("./icons/CsvFile"));
var import_Csv = __toESM(require("./icons/Csv"));
var import_CubeAlt02 = __toESM(require("./icons/CubeAlt02"));
var import_CubeAlt = __toESM(require("./icons/CubeAlt"));
var import_Cube = __toESM(require("./icons/Cube"));
var import_CurrencyBaht = __toESM(require("./icons/CurrencyBaht"));
var import_CurrencyDollar = __toESM(require("./icons/CurrencyDollar"));
var import_CurrencyEuro = __toESM(require("./icons/CurrencyEuro"));
var import_CurrencyExchange = __toESM(require("./icons/CurrencyExchange"));
var import_CurrencyLira = __toESM(require("./icons/CurrencyLira"));
var import_CurrencyPound = __toESM(require("./icons/CurrencyPound"));
var import_CurrencyRuble = __toESM(require("./icons/CurrencyRuble"));
var import_CurrencyRupee = __toESM(require("./icons/CurrencyRupee"));
var import_CurrencyWon = __toESM(require("./icons/CurrencyWon"));
var import_CurrencyYen = __toESM(require("./icons/CurrencyYen"));
var import_Currency = __toESM(require("./icons/Currency"));
var import_CursorAlt = __toESM(require("./icons/CursorAlt"));
var import_CursorArrow = __toESM(require("./icons/CursorArrow"));
var import_CursorClick = __toESM(require("./icons/CursorClick"));
var import_CursorCrosshair = __toESM(require("./icons/CursorCrosshair"));
var import_CursorHandAlt = __toESM(require("./icons/CursorHandAlt"));
var import_CursorHand = __toESM(require("./icons/CursorHand"));
var import_CursorPointerAlt = __toESM(require("./icons/CursorPointerAlt"));
var import_CursorPointer = __toESM(require("./icons/CursorPointer"));
var import_CursorText = __toESM(require("./icons/CursorText"));
var import_Cursor = __toESM(require("./icons/Cursor"));
var import_CustomerSupport = __toESM(require("./icons/CustomerSupport"));
var import_DataCloudCheck = __toESM(require("./icons/DataCloudCheck"));
var import_DataCloudDownload = __toESM(require("./icons/DataCloudDownload"));
var import_DataCloudOff = __toESM(require("./icons/DataCloudOff"));
var import_DataCloudUpload = __toESM(require("./icons/DataCloudUpload"));
var import_DataCloud = __toESM(require("./icons/DataCloud"));
var import_DatabaseAlt = __toESM(require("./icons/DatabaseAlt"));
var import_Database = __toESM(require("./icons/Database"));
var import_Delete = __toESM(require("./icons/Delete"));
var import_Delivery = __toESM(require("./icons/Delivery"));
var import_DentalChair = __toESM(require("./icons/DentalChair"));
var import_DentalFloss = __toESM(require("./icons/DentalFloss"));
var import_DentalForceps = __toESM(require("./icons/DentalForceps"));
var import_DentalMirror = __toESM(require("./icons/DentalMirror"));
var import_Deskphone = __toESM(require("./icons/Deskphone"));
var import_DevicesAlt = __toESM(require("./icons/DevicesAlt"));
var import_Devices = __toESM(require("./icons/Devices"));
var import_DiamondGem = __toESM(require("./icons/DiamondGem"));
var import_Dinner = __toESM(require("./icons/Dinner"));
var import_Discord = __toESM(require("./icons/Discord"));
var import_DistributeHorizontalSpacing = __toESM(require("./icons/DistributeHorizontalSpacing"));
var import_DistributeVerticalSpacing = __toESM(require("./icons/DistributeVerticalSpacing"));
var import_Django = __toESM(require("./icons/Django"));
var import_Dna = __toESM(require("./icons/Dna"));
var import_Docker = __toESM(require("./icons/Docker"));
var import_Dog = __toESM(require("./icons/Dog"));
var import_DownloadCircle = __toESM(require("./icons/DownloadCircle"));
var import_Download = __toESM(require("./icons/Download"));
var import_DragHandle = __toESM(require("./icons/DragHandle"));
var import_DragIndicator = __toESM(require("./icons/DragIndicator"));
var import_DrawingCompass = __toESM(require("./icons/DrawingCompass"));
var import_Dribbble = __toESM(require("./icons/Dribbble"));
var import_Drupal = __toESM(require("./icons/Drupal"));
var import_Ecg = __toESM(require("./icons/Ecg"));
var import_EditLine = __toESM(require("./icons/EditLine"));
var import_EditOff = __toESM(require("./icons/EditOff"));
var import_EditSquare = __toESM(require("./icons/EditSquare"));
var import_Edit = __toESM(require("./icons/Edit"));
var import_EftposAlt = __toESM(require("./icons/EftposAlt"));
var import_Eftpos = __toESM(require("./icons/Eftpos"));
var import_EggBoiled = __toESM(require("./icons/EggBoiled"));
var import_EggCracked = __toESM(require("./icons/EggCracked"));
var import_Egg = __toESM(require("./icons/Egg"));
var import_Electronjs = __toESM(require("./icons/Electronjs"));
var import_Elevator = __toESM(require("./icons/Elevator"));
var import_Elm = __toESM(require("./icons/Elm"));
var import_EmailAlert = __toESM(require("./icons/EmailAlert"));
var import_EmailAlt = __toESM(require("./icons/EmailAlt"));
var import_EmailEdit = __toESM(require("./icons/EmailEdit"));
var import_EmailFast = __toESM(require("./icons/EmailFast"));
var import_EmailForward = __toESM(require("./icons/EmailForward"));
var import_EmailNew = __toESM(require("./icons/EmailNew"));
var import_EmailOpenAlt = __toESM(require("./icons/EmailOpenAlt"));
var import_EmailOpen = __toESM(require("./icons/EmailOpen"));
var import_EmailRead = __toESM(require("./icons/EmailRead"));
var import_EmailVirus = __toESM(require("./icons/EmailVirus"));
var import_Email = __toESM(require("./icons/Email"));
var import_EmergencyHealth = __toESM(require("./icons/EmergencyHealth"));
var import_EmergencySiren = __toESM(require("./icons/EmergencySiren"));
var import_Enterprise = __toESM(require("./icons/Enterprise"));
var import_EqualNot = __toESM(require("./icons/EqualNot"));
var import_Equal = __toESM(require("./icons/Equal"));
var import_Erase = __toESM(require("./icons/Erase"));
var import_Escalator = __toESM(require("./icons/Escalator"));
var import_Etsy = __toESM(require("./icons/Etsy"));
var import_ExpandSidebar = __toESM(require("./icons/ExpandSidebar"));
var import_Expand = __toESM(require("./icons/Expand"));
var import_Explore = __toESM(require("./icons/Explore"));
var import_Export = __toESM(require("./icons/Export"));
var import_Expressjs = __toESM(require("./icons/Expressjs"));
var import_EyeOff = __toESM(require("./icons/EyeOff"));
var import_EyeScan = __toESM(require("./icons/EyeScan"));
var import_Eye = __toESM(require("./icons/Eye"));
var import_FaceHappy = __toESM(require("./icons/FaceHappy"));
var import_FaceId = __toESM(require("./icons/FaceId"));
var import_FaceNeutral = __toESM(require("./icons/FaceNeutral"));
var import_FaceSad = __toESM(require("./icons/FaceSad"));
var import_FaceSmile = __toESM(require("./icons/FaceSmile"));
var import_FaceWink = __toESM(require("./icons/FaceWink"));
var import_Facebook = __toESM(require("./icons/Facebook"));
var import_FastBackward = __toESM(require("./icons/FastBackward"));
var import_FastForward = __toESM(require("./icons/FastForward"));
var import_Feather = __toESM(require("./icons/Feather"));
var import_FerrisWheel = __toESM(require("./icons/FerrisWheel"));
var import_Figma = __toESM(require("./icons/Figma"));
var import_FileCancel = __toESM(require("./icons/FileCancel"));
var import_FileCheck = __toESM(require("./icons/FileCheck"));
var import_FileCode = __toESM(require("./icons/FileCode"));
var import_FileDownload = __toESM(require("./icons/FileDownload"));
var import_FileEdit = __toESM(require("./icons/FileEdit"));
var import_FileList = __toESM(require("./icons/FileList"));
var import_FileMedical = __toESM(require("./icons/FileMedical"));
var import_FileMinus = __toESM(require("./icons/FileMinus"));
var import_FilePlus = __toESM(require("./icons/FilePlus"));
var import_FileSearch = __toESM(require("./icons/FileSearch"));
var import_FileText = __toESM(require("./icons/FileText"));
var import_FileUpload = __toESM(require("./icons/FileUpload"));
var import_File = __toESM(require("./icons/File"));
var import_Files = __toESM(require("./icons/Files"));
var import_FilterAlt = __toESM(require("./icons/FilterAlt"));
var import_FilterOff = __toESM(require("./icons/FilterOff"));
var import_Filter = __toESM(require("./icons/Filter"));
var import_FingerprintAlt = __toESM(require("./icons/FingerprintAlt"));
var import_Fingerprint = __toESM(require("./icons/Fingerprint"));
var import_FireExtinguisher = __toESM(require("./icons/FireExtinguisher"));
var import_FireOff = __toESM(require("./icons/FireOff"));
var import_FireTruck = __toESM(require("./icons/FireTruck"));
var import_Fire = __toESM(require("./icons/Fire"));
var import_Firebase = __toESM(require("./icons/Firebase"));
var import_Fiverr = __toESM(require("./icons/Fiverr"));
var import_FlagAlt = __toESM(require("./icons/FlagAlt"));
var import_Flag = __toESM(require("./icons/Flag"));
var import_FlameOff = __toESM(require("./icons/FlameOff"));
var import_Flame = __toESM(require("./icons/Flame"));
var import_FlashDouble = __toESM(require("./icons/FlashDouble"));
var import_FlashOff = __toESM(require("./icons/FlashOff"));
var import_Flash = __toESM(require("./icons/Flash"));
var import_FlipHorizontalAlt = __toESM(require("./icons/FlipHorizontalAlt"));
var import_FlipHorizontal = __toESM(require("./icons/FlipHorizontal"));
var import_FlipVerticalAlt = __toESM(require("./icons/FlipVerticalAlt"));
var import_FlipVertical = __toESM(require("./icons/FlipVertical"));
var import_Flutter = __toESM(require("./icons/Flutter"));
var import_Fog = __toESM(require("./icons/Fog"));
var import_FolderBlocked = __toESM(require("./icons/FolderBlocked"));
var import_FolderCancel = __toESM(require("./icons/FolderCancel"));
var import_FolderCheck = __toESM(require("./icons/FolderCheck"));
var import_FolderCode = __toESM(require("./icons/FolderCode"));
var import_FolderDownload = __toESM(require("./icons/FolderDownload"));
var import_FolderEdit = __toESM(require("./icons/FolderEdit"));
var import_FolderLocked = __toESM(require("./icons/FolderLocked"));
var import_FolderMedical = __toESM(require("./icons/FolderMedical"));
var import_FolderMinus = __toESM(require("./icons/FolderMinus"));
var import_FolderOpen = __toESM(require("./icons/FolderOpen"));
var import_FolderPlus = __toESM(require("./icons/FolderPlus"));
var import_FolderSearch = __toESM(require("./icons/FolderSearch"));
var import_FolderUpload = __toESM(require("./icons/FolderUpload"));
var import_Folder = __toESM(require("./icons/Folder"));
var import_Folders = __toESM(require("./icons/Folders"));
var import_Framer = __toESM(require("./icons/Framer"));
var import_GasStation = __toESM(require("./icons/GasStation"));
var import_GenderFemale = __toESM(require("./icons/GenderFemale"));
var import_GenderMale = __toESM(require("./icons/GenderMale"));
var import_GenerateFile = __toESM(require("./icons/GenerateFile"));
var import_GenerateImage = __toESM(require("./icons/GenerateImage"));
var import_GenerateText = __toESM(require("./icons/GenerateText"));
var import_Gift = __toESM(require("./icons/Gift"));
var import_Giraffe = __toESM(require("./icons/Giraffe"));
var import_Git = __toESM(require("./icons/Git"));
var import_Github = __toESM(require("./icons/Github"));
var import_Gitlab = __toESM(require("./icons/Gitlab"));
var import_GlassesAlt = __toESM(require("./icons/GlassesAlt"));
var import_Glasses = __toESM(require("./icons/Glasses"));
var import_GlobeAlt01 = __toESM(require("./icons/GlobeAlt01"));
var import_GlobeAlt02 = __toESM(require("./icons/GlobeAlt02"));
var import_Globe = __toESM(require("./icons/Globe"));
var import_Goat = __toESM(require("./icons/Goat"));
var import_Google = __toESM(require("./icons/Google"));
var import_GraduationCapAlt = __toESM(require("./icons/GraduationCapAlt"));
var import_GraduationCap = __toESM(require("./icons/GraduationCap"));
var import_GridAlt = __toESM(require("./icons/GridAlt"));
var import_GridPlus = __toESM(require("./icons/GridPlus"));
var import_Grid = __toESM(require("./icons/Grid"));
var import_Gumroad = __toESM(require("./icons/Gumroad"));
var import_Hacker = __toESM(require("./icons/Hacker"));
var import_HairDryer = __toESM(require("./icons/HairDryer"));
var import_HalloweenCandle = __toESM(require("./icons/HalloweenCandle"));
var import_HalloweenCandy = __toESM(require("./icons/HalloweenCandy"));
var import_HalloweenCat = __toESM(require("./icons/HalloweenCat"));
var import_HalloweenCauldron = __toESM(require("./icons/HalloweenCauldron"));
var import_HalloweenCoffin = __toESM(require("./icons/HalloweenCoffin"));
var import_HalloweenGhost = __toESM(require("./icons/HalloweenGhost"));
var import_HalloweenLollipop = __toESM(require("./icons/HalloweenLollipop"));
var import_HalloweenPumpkin = __toESM(require("./icons/HalloweenPumpkin"));
var import_HalloweenSkull = __toESM(require("./icons/HalloweenSkull"));
var import_HalloweenSpellbook = __toESM(require("./icons/HalloweenSpellbook"));
var import_HalloweenSpider = __toESM(require("./icons/HalloweenSpider"));
var import_HalloweenTomb = __toESM(require("./icons/HalloweenTomb"));
var import_HalloweenWizardHat = __toESM(require("./icons/HalloweenWizardHat"));
var import_HandSupport = __toESM(require("./icons/HandSupport"));
var import_HandsSupport = __toESM(require("./icons/HandsSupport"));
var import_Hanger = __toESM(require("./icons/Hanger"));
var import_HashtagAlt = __toESM(require("./icons/HashtagAlt"));
var import_Hashtag = __toESM(require("./icons/Hashtag"));
var import_HazeNight = __toESM(require("./icons/HazeNight"));
var import_Haze = __toESM(require("./icons/Haze"));
var import_Headphones = __toESM(require("./icons/Headphones"));
var import_HealthCross = __toESM(require("./icons/HealthCross"));
var import_HealthServices = __toESM(require("./icons/HealthServices"));
var import_Heart = __toESM(require("./icons/Heart"));
var import_HelpCircle = __toESM(require("./icons/HelpCircle"));
var import_HelpOctagon = __toESM(require("./icons/HelpOctagon"));
var import_HelpSquare = __toESM(require("./icons/HelpSquare"));
var import_HexagonAlt = __toESM(require("./icons/HexagonAlt"));
var import_Hexagon = __toESM(require("./icons/Hexagon"));
var import_HideSidebar = __toESM(require("./icons/HideSidebar"));
var import_HomeAlt01 = __toESM(require("./icons/HomeAlt01"));
var import_HomeAlt02 = __toESM(require("./icons/HomeAlt02"));
var import_Home = __toESM(require("./icons/Home"));
var import_Hospital = __toESM(require("./icons/Hospital"));
var import_Hotel = __toESM(require("./icons/Hotel"));
var import_Hourglass = __toESM(require("./icons/Hourglass"));
var import_Html5 = __toESM(require("./icons/Html5"));
var import_Hurricane = __toESM(require("./icons/Hurricane"));
var import_IdentificationCard = __toESM(require("./icons/IdentificationCard"));
var import_ImageAlt = __toESM(require("./icons/ImageAlt"));
var import_ImageCopy = __toESM(require("./icons/ImageCopy"));
var import_ImageOffAlt = __toESM(require("./icons/ImageOffAlt"));
var import_ImageOff = __toESM(require("./icons/ImageOff"));
var import_ImagePlus = __toESM(require("./icons/ImagePlus"));
var import_Image = __toESM(require("./icons/Image"));
var import_Import = __toESM(require("./icons/Import"));
var import_InboxAlt = __toESM(require("./icons/InboxAlt"));
var import_InboxInAlt = __toESM(require("./icons/InboxInAlt"));
var import_InboxIn = __toESM(require("./icons/InboxIn"));
var import_InboxOutAlt = __toESM(require("./icons/InboxOutAlt"));
var import_InboxOut = __toESM(require("./icons/InboxOut"));
var import_Inbox = __toESM(require("./icons/Inbox"));
var import_Incognito = __toESM(require("./icons/Incognito"));
var import_InfinityAlt = __toESM(require("./icons/InfinityAlt"));
var import_Infinity = __toESM(require("./icons/Infinity"));
var import_InfoCircle = __toESM(require("./icons/InfoCircle"));
var import_InfoOctagon = __toESM(require("./icons/InfoOctagon"));
var import_InfoSquare = __toESM(require("./icons/InfoSquare"));
var import_Instagram = __toESM(require("./icons/Instagram"));
var import_InteractiveVoiceResponse = __toESM(require("./icons/InteractiveVoiceResponse"));
var import_InterdentalBrush = __toESM(require("./icons/InterdentalBrush"));
var import_Invoice = __toESM(require("./icons/Invoice"));
var import_IotAlt = __toESM(require("./icons/IotAlt"));
var import_Iot = __toESM(require("./icons/Iot"));
var import_Java = __toESM(require("./icons/Java"));
var import_Javascript = __toESM(require("./icons/Javascript"));
var import_JpgDownload = __toESM(require("./icons/JpgDownload"));
var import_JpgFile = __toESM(require("./icons/JpgFile"));
var import_Jpg = __toESM(require("./icons/Jpg"));
var import_Kettle = __toESM(require("./icons/Kettle"));
var import_KeyAlt = __toESM(require("./icons/KeyAlt"));
var import_KeyOffAlt = __toESM(require("./icons/KeyOffAlt"));
var import_KeyOff = __toESM(require("./icons/KeyOff"));
var import_Key = __toESM(require("./icons/Key"));
var import_KeyboardOff = __toESM(require("./icons/KeyboardOff"));
var import_Keyboard = __toESM(require("./icons/Keyboard"));
var import_KitchenTools = __toESM(require("./icons/KitchenTools"));
var import_KnifeSharpener = __toESM(require("./icons/KnifeSharpener"));
var import_Knife = __toESM(require("./icons/Knife"));
var import_Kotlin = __toESM(require("./icons/Kotlin"));
var import_LabelImportant = __toESM(require("./icons/LabelImportant"));
var import_LabelOff = __toESM(require("./icons/LabelOff"));
var import_Label = __toESM(require("./icons/Label"));
var import_LanguageEnglish = __toESM(require("./icons/LanguageEnglish"));
var import_Laptop = __toESM(require("./icons/Laptop"));
var import_LayersTwo = __toESM(require("./icons/LayersTwo"));
var import_Layers = __toESM(require("./icons/Layers"));
var import_LayoutAlt01 = __toESM(require("./icons/LayoutAlt01"));
var import_LayoutAlt02 = __toESM(require("./icons/LayoutAlt02"));
var import_LayoutKanban = __toESM(require("./icons/LayoutKanban"));
var import_Layout = __toESM(require("./icons/Layout"));
var import_Leaf = __toESM(require("./icons/Leaf"));
var import_Leafs = __toESM(require("./icons/Leafs"));
var import_Lemonsqueezy = __toESM(require("./icons/Lemonsqueezy"));
var import_LicenseDraft = __toESM(require("./icons/LicenseDraft"));
var import_LicenseThirdParty = __toESM(require("./icons/LicenseThirdParty"));
var import_License = __toESM(require("./icons/License"));
var import_LightbulbOff = __toESM(require("./icons/LightbulbOff"));
var import_LightbulbOn = __toESM(require("./icons/LightbulbOn"));
var import_Lighthouse = __toESM(require("./icons/Lighthouse"));
var import_LinkAlt01 = __toESM(require("./icons/LinkAlt01"));
var import_LinkAlt02 = __toESM(require("./icons/LinkAlt02"));
var import_LinkBrokenAlt01 = __toESM(require("./icons/LinkBrokenAlt01"));
var import_LinkBrokenAlt02 = __toESM(require("./icons/LinkBrokenAlt02"));
var import_LinkBroken = __toESM(require("./icons/LinkBroken"));
var import_LinkExternal = __toESM(require("./icons/LinkExternal"));
var import_LinkOff = __toESM(require("./icons/LinkOff"));
var import_Link = __toESM(require("./icons/Link"));
var import_Linkedin = __toESM(require("./icons/Linkedin"));
var import_Linux = __toESM(require("./icons/Linux"));
var import_Lion = __toESM(require("./icons/Lion"));
var import_ListBulleted = __toESM(require("./icons/ListBulleted"));
var import_ListNumbered = __toESM(require("./icons/ListNumbered"));
var import_Loan = __toESM(require("./icons/Loan"));
var import_LocationMy = __toESM(require("./icons/LocationMy"));
var import_LocationPinAlert = __toESM(require("./icons/LocationPinAlert"));
var import_LocationPinCancel = __toESM(require("./icons/LocationPinCancel"));
var import_LocationPinCheck = __toESM(require("./icons/LocationPinCheck"));
var import_LocationPinMinus = __toESM(require("./icons/LocationPinMinus"));
var import_LocationPinOff = __toESM(require("./icons/LocationPinOff"));
var import_LocationPinPlus = __toESM(require("./icons/LocationPinPlus"));
var import_LocationPin = __toESM(require("./icons/LocationPin"));
var import_LockAlt01 = __toESM(require("./icons/LockAlt01"));
var import_LockAlt02 = __toESM(require("./icons/LockAlt02"));
var import_LockOpenAlt01 = __toESM(require("./icons/LockOpenAlt01"));
var import_LockOpenAlt02 = __toESM(require("./icons/LockOpenAlt02"));
var import_LockOpen = __toESM(require("./icons/LockOpen"));
var import_Lock = __toESM(require("./icons/Lock"));
var import_LogIn = __toESM(require("./icons/LogIn"));
var import_LogOut = __toESM(require("./icons/LogOut"));
var import_Lottery = __toESM(require("./icons/Lottery"));
var import_LoyaltyCardAlt = __toESM(require("./icons/LoyaltyCardAlt"));
var import_LoyaltyCardBarcode = __toESM(require("./icons/LoyaltyCardBarcode"));
var import_LoyaltyCard = __toESM(require("./icons/LoyaltyCard"));
var import_Luggage = __toESM(require("./icons/Luggage"));
var import_Lunch = __toESM(require("./icons/Lunch"));
var import_MagicWandOff = __toESM(require("./icons/MagicWandOff"));
var import_MagicWand = __toESM(require("./icons/MagicWand"));
var import_Magnet = __toESM(require("./icons/Magnet"));
var import_Map = __toESM(require("./icons/Map"));
var import_Mastodon = __toESM(require("./icons/Mastodon"));
var import_MaximizeAlt01 = __toESM(require("./icons/MaximizeAlt01"));
var import_MaximizeAlt02 = __toESM(require("./icons/MaximizeAlt02"));
var import_MaximizeAlt03 = __toESM(require("./icons/MaximizeAlt03"));
var import_Maximize = __toESM(require("./icons/Maximize"));
var import_MeatBoxedChicken = __toESM(require("./icons/MeatBoxedChicken"));
var import_MeatBoxed = __toESM(require("./icons/MeatBoxed"));
var import_Medication = __toESM(require("./icons/Medication"));
var import_Medium = __toESM(require("./icons/Medium"));
var import_MeetAndGreet = __toESM(require("./icons/MeetAndGreet"));
var import_MenuAlt01 = __toESM(require("./icons/MenuAlt01"));
var import_MenuAlt02 = __toESM(require("./icons/MenuAlt02"));
var import_MenuAlt03 = __toESM(require("./icons/MenuAlt03"));
var import_MenuClose = __toESM(require("./icons/MenuClose"));
var import_Menu = __toESM(require("./icons/Menu"));
var import_MergeRightAlt = __toESM(require("./icons/MergeRightAlt"));
var import_MergeRight = __toESM(require("./icons/MergeRight"));
var import_MergeUpAlt = __toESM(require("./icons/MergeUpAlt"));
var import_MergeUp = __toESM(require("./icons/MergeUp"));
var import_Messenger = __toESM(require("./icons/Messenger"));
var import_Meta = __toESM(require("./icons/Meta"));
var import_MicrophoneOff = __toESM(require("./icons/MicrophoneOff"));
var import_Microphone = __toESM(require("./icons/Microphone"));
var import_Microscope = __toESM(require("./icons/Microscope"));
var import_MicrosoftTeams = __toESM(require("./icons/MicrosoftTeams"));
var import_Microwave = __toESM(require("./icons/Microwave"));
var import_Milestone = __toESM(require("./icons/Milestone"));
var import_MinimizeAlt01 = __toESM(require("./icons/MinimizeAlt01"));
var import_Minimize = __toESM(require("./icons/Minimize"));
var import_MinusCircle = __toESM(require("./icons/MinusCircle"));
var import_Minus = __toESM(require("./icons/Minus"));
var import_Mobile = __toESM(require("./icons/Mobile"));
var import_Monitor = __toESM(require("./icons/Monitor"));
var import_Monkey = __toESM(require("./icons/Monkey"));
var import_MoonAlt = __toESM(require("./icons/MoonAlt"));
var import_Moon = __toESM(require("./icons/Moon"));
var import_Moped = __toESM(require("./icons/Moped"));
var import_MoreHorizontal = __toESM(require("./icons/MoreHorizontal"));
var import_MoreVertical = __toESM(require("./icons/MoreVertical"));
var import_Mortgage = __toESM(require("./icons/Mortgage"));
var import_Mouse = __toESM(require("./icons/Mouse"));
var import_Move = __toESM(require("./icons/Move"));
var import_MuscleFlex = __toESM(require("./icons/MuscleFlex"));
var import_MusicOff = __toESM(require("./icons/MusicOff"));
var import_Music = __toESM(require("./icons/Music"));
var import_Nachos = __toESM(require("./icons/Nachos"));
var import_Navigation = __toESM(require("./icons/Navigation"));
var import_Nextjs = __toESM(require("./icons/Nextjs"));
var import_Nodejs = __toESM(require("./icons/Nodejs"));
var import_NotificationAlert = __toESM(require("./icons/NotificationAlert"));
var import_NotificationCancel = __toESM(require("./icons/NotificationCancel"));
var import_NotificationCheck = __toESM(require("./icons/NotificationCheck"));
var import_NotificationMinus = __toESM(require("./icons/NotificationMinus"));
var import_NotificationNew = __toESM(require("./icons/NotificationNew"));
var import_NotificationOff = __toESM(require("./icons/NotificationOff"));
var import_NotificationPlus = __toESM(require("./icons/NotificationPlus"));
var import_NotificationRinging = __toESM(require("./icons/NotificationRinging"));
var import_NotificationSnooze = __toESM(require("./icons/NotificationSnooze"));
var import_Notification = __toESM(require("./icons/Notification"));
var import_Notion = __toESM(require("./icons/Notion"));
var import_Npm = __toESM(require("./icons/Npm"));
var import_Number0 = __toESM(require("./icons/Number0"));
var import_Number1 = __toESM(require("./icons/Number1"));
var import_Number2 = __toESM(require("./icons/Number2"));
var import_Number3 = __toESM(require("./icons/Number3"));
var import_Number4 = __toESM(require("./icons/Number4"));
var import_Number5 = __toESM(require("./icons/Number5"));
var import_Number6 = __toESM(require("./icons/Number6"));
var import_Number7 = __toESM(require("./icons/Number7"));
var import_Number8 = __toESM(require("./icons/Number8"));
var import_Number9 = __toESM(require("./icons/Number9"));
var import_Numbers = __toESM(require("./icons/Numbers"));
var import_Octagon = __toESM(require("./icons/Octagon"));
var import_Openai = __toESM(require("./icons/Openai"));
var import_OriginalSize = __toESM(require("./icons/OriginalSize"));
var import_PackageDeliveryFast = __toESM(require("./icons/PackageDeliveryFast"));
var import_PackageDelivery = __toESM(require("./icons/PackageDelivery"));
var import_Package = __toESM(require("./icons/Package"));
var import_PaintBrushAlt = __toESM(require("./icons/PaintBrushAlt"));
var import_PaintBrush = __toESM(require("./icons/PaintBrush"));
var import_PalmTree = __toESM(require("./icons/PalmTree"));
var import_Panda = __toESM(require("./icons/Panda"));
var import_PaperBag = __toESM(require("./icons/PaperBag"));
var import_ParkingGarage = __toESM(require("./icons/ParkingGarage"));
var import_Parking = __toESM(require("./icons/Parking"));
var import_Password = __toESM(require("./icons/Password"));
var import_Patreon = __toESM(require("./icons/Patreon"));
var import_PauseCircle = __toESM(require("./icons/PauseCircle"));
var import_PdfDownload = __toESM(require("./icons/PdfDownload"));
var import_PdfFile = __toESM(require("./icons/PdfFile"));
var import_Pdf = __toESM(require("./icons/Pdf"));
var import_PetFriendly = __toESM(require("./icons/PetFriendly"));
var import_PhoneCancel = __toESM(require("./icons/PhoneCancel"));
var import_PhoneFast = __toESM(require("./icons/PhoneFast"));
var import_PhoneForward = __toESM(require("./icons/PhoneForward"));
var import_PhoneIncomingForward = __toESM(require("./icons/PhoneIncomingForward"));
var import_PhoneIncoming = __toESM(require("./icons/PhoneIncoming"));
var import_PhoneOff = __toESM(require("./icons/PhoneOff"));
var import_PhoneOutgoing = __toESM(require("./icons/PhoneOutgoing"));
var import_PhoneRouting = __toESM(require("./icons/PhoneRouting"));
var import_Phone = __toESM(require("./icons/Phone"));
var import_PhotoCameraOff = __toESM(require("./icons/PhotoCameraOff"));
var import_PhotoCamera = __toESM(require("./icons/PhotoCamera"));
var import_Php = __toESM(require("./icons/Php"));
var import_Pig = __toESM(require("./icons/Pig"));
var import_PiggyBank = __toESM(require("./icons/PiggyBank"));
var import_Pill = __toESM(require("./icons/Pill"));
var import_PillsAlt01 = __toESM(require("./icons/PillsAlt01"));
var import_PillsAlt02 = __toESM(require("./icons/PillsAlt02"));
var import_Pin = __toESM(require("./icons/Pin"));
var import_Pinterest = __toESM(require("./icons/Pinterest"));
var import_Planet = __toESM(require("./icons/Planet"));
var import_Plaster = __toESM(require("./icons/Plaster"));
var import_PlayCircle = __toESM(require("./icons/PlayCircle"));
var import_Play = __toESM(require("./icons/Play"));
var import_Plug = __toESM(require("./icons/Plug"));
var import_PlusCircle = __toESM(require("./icons/PlusCircle"));
var import_Plus = __toESM(require("./icons/Plus"));
var import_PngDownload = __toESM(require("./icons/PngDownload"));
var import_PngFile = __toESM(require("./icons/PngFile"));
var import_Png = __toESM(require("./icons/Png"));
var import_Podcast = __toESM(require("./icons/Podcast"));
var import_Pool = __toESM(require("./icons/Pool"));
var import_Postgresql = __toESM(require("./icons/Postgresql"));
var import_PrinterOff = __toESM(require("./icons/PrinterOff"));
var import_Printer = __toESM(require("./icons/Printer"));
var import_PrivateDriver = __toESM(require("./icons/PrivateDriver"));
var import_PublicSpeaking = __toESM(require("./icons/PublicSpeaking"));
var import_PuzzlePiece = __toESM(require("./icons/PuzzlePiece"));
var import_Python = __toESM(require("./icons/Python"));
var import_Quora = __toESM(require("./icons/Quora"));
var import_R = __toESM(require("./icons/R"));
var import_Rabbit = __toESM(require("./icons/Rabbit"));
var import_RadarAlt01 = __toESM(require("./icons/RadarAlt01"));
var import_RadarAlt02 = __toESM(require("./icons/RadarAlt02"));
var import_Radar = __toESM(require("./icons/Radar"));
var import_RadioButton = __toESM(require("./icons/RadioButton"));
var import_RainDrizzle = __toESM(require("./icons/RainDrizzle"));
var import_RainHeavy = __toESM(require("./icons/RainHeavy"));
var import_Rain = __toESM(require("./icons/Rain"));
var import_Raindrop = __toESM(require("./icons/Raindrop"));
var import_RaindropsAlt = __toESM(require("./icons/RaindropsAlt"));
var import_Raindrops = __toESM(require("./icons/Raindrops"));
var import_React = __toESM(require("./icons/React"));
var import_ReceiptAlt = __toESM(require("./icons/ReceiptAlt"));
var import_Receipt = __toESM(require("./icons/Receipt"));
var import_Recycle = __toESM(require("./icons/Recycle"));
var import_Redo = __toESM(require("./icons/Redo"));
var import_RefreshCcw = __toESM(require("./icons/RefreshCcw"));
var import_RefreshCw = __toESM(require("./icons/RefreshCw"));
var import_Refresh = __toESM(require("./icons/Refresh"));
var import_Regenerate = __toESM(require("./icons/Regenerate"));
var import_ReplyAll = __toESM(require("./icons/ReplyAll"));
var import_Reply = __toESM(require("./icons/Reply"));
var import_RestaurantMenu = __toESM(require("./icons/RestaurantMenu"));
var import_Restaurant = __toESM(require("./icons/Restaurant"));
var import_Rhino = __toESM(require("./icons/Rhino"));
var import_Roadmap = __toESM(require("./icons/Roadmap"));
var import_Robot = __toESM(require("./icons/Robot"));
var import_Rocket = __toESM(require("./icons/Rocket"));
var import_RowPlus = __toESM(require("./icons/RowPlus"));
var import_RowsFour = __toESM(require("./icons/RowsFour"));
var import_RowsThree = __toESM(require("./icons/RowsThree"));
var import_RowsTwoAlt = __toESM(require("./icons/RowsTwoAlt"));
var import_RowsTwo = __toESM(require("./icons/RowsTwo"));
var import_Ruler = __toESM(require("./icons/Ruler"));
var import_Sailboat = __toESM(require("./icons/Sailboat"));
var import_Salami = __toESM(require("./icons/Salami"));
var import_SaleAlt = __toESM(require("./icons/SaleAlt"));
var import_Sale = __toESM(require("./icons/Sale"));
var import_SausagesAlt = __toESM(require("./icons/SausagesAlt"));
var import_Sausages = __toESM(require("./icons/Sausages"));
var import_ScaleBodyWeight = __toESM(require("./icons/ScaleBodyWeight"));
var import_Scale = __toESM(require("./icons/Scale"));
var import_Scalpel = __toESM(require("./icons/Scalpel"));
var import_ScooterAlt = __toESM(require("./icons/ScooterAlt"));
var import_Scooter = __toESM(require("./icons/Scooter"));
var import_SearchAlert = __toESM(require("./icons/SearchAlert"));
var import_SearchAlt = __toESM(require("./icons/SearchAlt"));
var import_SearchCancel = __toESM(require("./icons/SearchCancel"));
var import_SearchCheck = __toESM(require("./icons/SearchCheck"));
var import_SearchMinus = __toESM(require("./icons/SearchMinus"));
var import_SearchPlus = __toESM(require("./icons/SearchPlus"));
var import_SearchProtection = __toESM(require("./icons/SearchProtection"));
var import_SearchVirus = __toESM(require("./icons/SearchVirus"));
var import_Search = __toESM(require("./icons/Search"));
var import_SeatChild = __toESM(require("./icons/SeatChild"));
var import_SeatReclining = __toESM(require("./icons/SeatReclining"));
var import_Seat = __toESM(require("./icons/Seat"));
var import_SecurityCamera = __toESM(require("./icons/SecurityCamera"));
var import_SendAlt01 = __toESM(require("./icons/SendAlt01"));
var import_SendAlt02 = __toESM(require("./icons/SendAlt02"));
var import_Send = __toESM(require("./icons/Send"));
var import_ServerAlt = __toESM(require("./icons/ServerAlt"));
var import_ServerPbxAlt = __toESM(require("./icons/ServerPbxAlt"));
var import_ServerPbx = __toESM(require("./icons/ServerPbx"));
var import_Server = __toESM(require("./icons/Server"));
var import_SettingsAdjustHorizontal = __toESM(require("./icons/SettingsAdjustHorizontal"));
var import_SettingsAdjustVertical = __toESM(require("./icons/SettingsAdjustVertical"));
var import_SettingsAlt = __toESM(require("./icons/SettingsAlt"));
var import_Settings = __toESM(require("./icons/Settings"));
var import_ShareAndroid = __toESM(require("./icons/ShareAndroid"));
var import_ShareIos = __toESM(require("./icons/ShareIos"));
var import_ShareWindows = __toESM(require("./icons/ShareWindows"));
var import_Sheep = __toESM(require("./icons/Sheep"));
var import_ShieldAlert = __toESM(require("./icons/ShieldAlert"));
var import_ShieldCancel = __toESM(require("./icons/ShieldCancel"));
var import_ShieldCheck = __toESM(require("./icons/ShieldCheck"));
var import_ShieldLock = __toESM(require("./icons/ShieldLock"));
var import_ShieldMinus = __toESM(require("./icons/ShieldMinus"));
var import_ShieldOff = __toESM(require("./icons/ShieldOff"));
var import_ShieldPerson = __toESM(require("./icons/ShieldPerson"));
var import_ShieldPlus = __toESM(require("./icons/ShieldPlus"));
var import_Shield = __toESM(require("./icons/Shield"));
var import_ShipSteeringWheel = __toESM(require("./icons/ShipSteeringWheel"));
var import_ShoppingBagCancel = __toESM(require("./icons/ShoppingBagCancel"));
var import_ShoppingBagCheck = __toESM(require("./icons/ShoppingBagCheck"));
var import_ShoppingBagMinus = __toESM(require("./icons/ShoppingBagMinus"));
var import_ShoppingBagOff = __toESM(require("./icons/ShoppingBagOff"));
var import_ShoppingBagPlus = __toESM(require("./icons/ShoppingBagPlus"));
var import_ShoppingBag = __toESM(require("./icons/ShoppingBag"));
var import_ShoppingBasketCancel = __toESM(require("./icons/ShoppingBasketCancel"));
var import_ShoppingBasketCheck = __toESM(require("./icons/ShoppingBasketCheck"));
var import_ShoppingBasketMinus = __toESM(require("./icons/ShoppingBasketMinus"));
var import_ShoppingBasketOff = __toESM(require("./icons/ShoppingBasketOff"));
var import_ShoppingBasketPlus = __toESM(require("./icons/ShoppingBasketPlus"));
var import_ShoppingBasket = __toESM(require("./icons/ShoppingBasket"));
var import_Shower = __toESM(require("./icons/Shower"));
var import_SidebarAlt = __toESM(require("./icons/SidebarAlt"));
var import_Sidebar = __toESM(require("./icons/Sidebar"));
var import_Sigma = __toESM(require("./icons/Sigma"));
var import_Signpost = __toESM(require("./icons/Signpost"));
var import_SimCard = __toESM(require("./icons/SimCard"));
var import_SkipBack = __toESM(require("./icons/SkipBack"));
var import_SkipForward = __toESM(require("./icons/SkipForward"));
var import_Slack = __toESM(require("./icons/Slack"));
var import_SmartWatch = __toESM(require("./icons/SmartWatch"));
var import_SmokeDetector = __toESM(require("./icons/SmokeDetector"));
var import_SmokeFree = __toESM(require("./icons/SmokeFree"));
var import_Smoking = __toESM(require("./icons/Smoking"));
var import_Snacks = __toESM(require("./icons/Snacks"));
var import_Snapchat = __toESM(require("./icons/Snapchat"));
var import_Snow = __toESM(require("./icons/Snow"));
var import_SnowflakeAlt = __toESM(require("./icons/SnowflakeAlt"));
var import_Snowflake = __toESM(require("./icons/Snowflake"));
var import_Socket = __toESM(require("./icons/Socket"));
var import_Sofa = __toESM(require("./icons/Sofa"));
var import_SolarEnergyAlt = __toESM(require("./icons/SolarEnergyAlt"));
var import_SolarEnergy = __toESM(require("./icons/SolarEnergy"));
var import_Soundcloud = __toESM(require("./icons/Soundcloud"));
var import_SpacingHeight = __toESM(require("./icons/SpacingHeight"));
var import_SpacingWidth = __toESM(require("./icons/SpacingWidth"));
var import_SparksAlt = __toESM(require("./icons/SparksAlt"));
var import_Sparks = __toESM(require("./icons/Sparks"));
var import_Speaker = __toESM(require("./icons/Speaker"));
var import_Spotify = __toESM(require("./icons/Spotify"));
var import_Sprout = __toESM(require("./icons/Sprout"));
var import_Sql = __toESM(require("./icons/Sql"));
var import_SquareDashed = __toESM(require("./icons/SquareDashed"));
var import_SquareRoundedDashed = __toESM(require("./icons/SquareRoundedDashed"));
var import_SquareRounded = __toESM(require("./icons/SquareRounded"));
var import_Square = __toESM(require("./icons/Square"));
var import_Stairs = __toESM(require("./icons/Stairs"));
var import_Stamp = __toESM(require("./icons/Stamp"));
var import_Star = __toESM(require("./icons/Star"));
var import_SteakGrilled = __toESM(require("./icons/SteakGrilled"));
var import_Steak = __toESM(require("./icons/Steak"));
var import_Steps = __toESM(require("./icons/Steps"));
var import_StickyNote = __toESM(require("./icons/StickyNote"));
var import_StopCircle = __toESM(require("./icons/StopCircle"));
var import_Store = __toESM(require("./icons/Store"));
var import_Student = __toESM(require("./icons/Student"));
var import_Substack = __toESM(require("./icons/Substack"));
var import_Sun = __toESM(require("./icons/Sun"));
var import_Sunrise = __toESM(require("./icons/Sunrise"));
var import_Sunset = __toESM(require("./icons/Sunset"));
var import_Support = __toESM(require("./icons/Support"));
var import_Surfboard = __toESM(require("./icons/Surfboard"));
var import_SustainableEnergy = __toESM(require("./icons/SustainableEnergy"));
var import_Svetle = __toESM(require("./icons/Svetle"));
var import_SvgDownload = __toESM(require("./icons/SvgDownload"));
var import_SvgFile = __toESM(require("./icons/SvgFile"));
var import_Svg = __toESM(require("./icons/Svg"));
var import_SwapHorizontal = __toESM(require("./icons/SwapHorizontal"));
var import_SwapVertical = __toESM(require("./icons/SwapVertical"));
var import_Swift = __toESM(require("./icons/Swift"));
var import_Switch = __toESM(require("./icons/Switch"));
var import_Sync = __toESM(require("./icons/Sync"));
var import_Syringe = __toESM(require("./icons/Syringe"));
var import_Tablet = __toESM(require("./icons/Tablet"));
var import_Tag = __toESM(require("./icons/Tag"));
var import_Tailwind = __toESM(require("./icons/Tailwind"));
var import_Tapas = __toESM(require("./icons/Tapas"));
var import_Taxi = __toESM(require("./icons/Taxi"));
var import_Telegram = __toESM(require("./icons/Telegram"));
var import_Telescope = __toESM(require("./icons/Telescope"));
var import_TemperatureCelsius = __toESM(require("./icons/TemperatureCelsius"));
var import_TemperatureCold = __toESM(require("./icons/TemperatureCold"));
var import_TemperatureFahrenheit = __toESM(require("./icons/TemperatureFahrenheit"));
var import_TemperatureHot = __toESM(require("./icons/TemperatureHot"));
var import_Temperature = __toESM(require("./icons/Temperature"));
var import_TermDepositAlt = __toESM(require("./icons/TermDepositAlt"));
var import_TermDeposit = __toESM(require("./icons/TermDeposit"));
var import_TerminalCircle = __toESM(require("./icons/TerminalCircle"));
var import_TerminalSquare = __toESM(require("./icons/TerminalSquare"));
var import_Terminal = __toESM(require("./icons/Terminal"));
var import_TextBold = __toESM(require("./icons/TextBold"));
var import_TextClearFormat = __toESM(require("./icons/TextClearFormat"));
var import_TextColor = __toESM(require("./icons/TextColor"));
var import_TextFont = __toESM(require("./icons/TextFont"));
var import_TextItalic = __toESM(require("./icons/TextItalic"));
var import_TextLetterSpacing = __toESM(require("./icons/TextLetterSpacing"));
var import_TextLineHeight = __toESM(require("./icons/TextLineHeight"));
var import_TextStrikethrough = __toESM(require("./icons/TextStrikethrough"));
var import_TextUnderline = __toESM(require("./icons/TextUnderline"));
var import_Thermometer = __toESM(require("./icons/Thermometer"));
var import_Threads = __toESM(require("./icons/Threads"));
var import_ThumbsDown = __toESM(require("./icons/ThumbsDown"));
var import_ThumbsUp = __toESM(require("./icons/ThumbsUp"));
var import_ThunderstormStrong = __toESM(require("./icons/ThunderstormStrong"));
var import_Thunderstorm = __toESM(require("./icons/Thunderstorm"));
var import_TicketAlt = __toESM(require("./icons/TicketAlt"));
var import_TicketOffAlt = __toESM(require("./icons/TicketOffAlt"));
var import_TicketOff = __toESM(require("./icons/TicketOff"));
var import_Ticket = __toESM(require("./icons/Ticket"));
var import_Tiktok = __toESM(require("./icons/Tiktok"));
var import_TimeBack = __toESM(require("./icons/TimeBack"));
var import_TimeRefresh = __toESM(require("./icons/TimeRefresh"));
var import_TimeUpdate = __toESM(require("./icons/TimeUpdate"));
var import_Time = __toESM(require("./icons/Time"));
var import_TimerCancel = __toESM(require("./icons/TimerCancel"));
var import_TimerCheck = __toESM(require("./icons/TimerCheck"));
var import_TimerMinus = __toESM(require("./icons/TimerMinus"));
var import_TimerOff = __toESM(require("./icons/TimerOff"));
var import_TimerPlus = __toESM(require("./icons/TimerPlus"));
var import_Timer = __toESM(require("./icons/Timer"));
var import_ToastButter = __toESM(require("./icons/ToastButter"));
var import_Toast = __toESM(require("./icons/Toast"));
var import_Toaster = __toESM(require("./icons/Toaster"));
var import_Toilet = __toESM(require("./icons/Toilet"));
var import_ToolAlt = __toESM(require("./icons/ToolAlt"));
var import_Tool = __toESM(require("./icons/Tool"));
var import_ToothBraces = __toESM(require("./icons/ToothBraces"));
var import_ToothBridge = __toESM(require("./icons/ToothBridge"));
var import_ToothCheckUp = __toESM(require("./icons/ToothCheckUp"));
var import_ToothChipped = __toESM(require("./icons/ToothChipped"));
var import_ToothClean = __toESM(require("./icons/ToothClean"));
var import_ToothCrack = __toESM(require("./icons/ToothCrack"));
var import_ToothCrown = __toESM(require("./icons/ToothCrown"));
var import_ToothDamaged = __toESM(require("./icons/ToothDamaged"));
var import_ToothExtraction = __toESM(require("./icons/ToothExtraction"));
var import_ToothFilling = __toESM(require("./icons/ToothFilling"));
var import_ToothFissureSealing = __toESM(require("./icons/ToothFissureSealing"));
var import_ToothGumInflammation = __toESM(require("./icons/ToothGumInflammation"));
var import_ToothGumProtection = __toESM(require("./icons/ToothGumProtection"));
var import_ToothGum = __toESM(require("./icons/ToothGum"));
var import_ToothImplantCrown = __toESM(require("./icons/ToothImplantCrown"));
var import_ToothImplant = __toESM(require("./icons/ToothImplant"));
var import_ToothProtection = __toESM(require("./icons/ToothProtection"));
var import_ToothRootCanal = __toESM(require("./icons/ToothRootCanal"));
var import_ToothVeneer = __toESM(require("./icons/ToothVeneer"));
var import_ToothXRay = __toESM(require("./icons/ToothXRay"));
var import_Tooth = __toESM(require("./icons/Tooth"));
var import_ToothbrushAlt = __toESM(require("./icons/ToothbrushAlt"));
var import_Toothbrush = __toESM(require("./icons/Toothbrush"));
var import_Tornado = __toESM(require("./icons/Tornado"));
var import_Tos = __toESM(require("./icons/Tos"));
var import_Tractor = __toESM(require("./icons/Tractor"));
var import_Train = __toESM(require("./icons/Train"));
var import_TranslateAlt = __toESM(require("./icons/TranslateAlt"));
var import_Translate = __toESM(require("./icons/Translate"));
var import_TrashAlt = __toESM(require("./icons/TrashAlt"));
var import_TrashCancel = __toESM(require("./icons/TrashCancel"));
var import_Trash = __toESM(require("./icons/Trash"));
var import_Tree = __toESM(require("./icons/Tree"));
var import_TrendDown = __toESM(require("./icons/TrendDown"));
var import_TrendUp = __toESM(require("./icons/TrendUp"));
var import_TriangleDashed = __toESM(require("./icons/TriangleDashed"));
var import_Triangle = __toESM(require("./icons/Triangle"));
var import_TrophyAlt = __toESM(require("./icons/TrophyAlt"));
var import_Trophy = __toESM(require("./icons/Trophy"));
var import_Truck = __toESM(require("./icons/Truck"));
var import_TumbleDryer = __toESM(require("./icons/TumbleDryer"));
var import_Tumblr = __toESM(require("./icons/Tumblr"));
var import_TuneHorizontalAlt = __toESM(require("./icons/TuneHorizontalAlt"));
var import_TuneHorizontal = __toESM(require("./icons/TuneHorizontal"));
var import_TuneVerticalAlt = __toESM(require("./icons/TuneVerticalAlt"));
var import_TuneVertical = __toESM(require("./icons/TuneVertical"));
var import_Tv = __toESM(require("./icons/Tv"));
var import_Twitch = __toESM(require("./icons/Twitch"));
var import_Twitter = __toESM(require("./icons/Twitter"));
var import_Typescript = __toESM(require("./icons/Typescript"));
var import_UmbrellaAlt01 = __toESM(require("./icons/UmbrellaAlt01"));
var import_UmbrellaAlt02 = __toESM(require("./icons/UmbrellaAlt02"));
var import_Umbrella = __toESM(require("./icons/Umbrella"));
var import_Unarchive = __toESM(require("./icons/Unarchive"));
var import_Undo = __toESM(require("./icons/Undo"));
var import_UnfoldLess = __toESM(require("./icons/UnfoldLess"));
var import_UnfoldMore = __toESM(require("./icons/UnfoldMore"));
var import_Unity = __toESM(require("./icons/Unity"));
var import_UploadCircle = __toESM(require("./icons/UploadCircle"));
var import_Upload = __toESM(require("./icons/Upload"));
var import_UsbOff = __toESM(require("./icons/UsbOff"));
var import_UsbStick = __toESM(require("./icons/UsbStick"));
var import_Usb = __toESM(require("./icons/Usb"));
var import_UserAlert = __toESM(require("./icons/UserAlert"));
var import_UserCancel = __toESM(require("./icons/UserCancel"));
var import_UserCheck = __toESM(require("./icons/UserCheck"));
var import_UserCircle = __toESM(require("./icons/UserCircle"));
var import_UserEdit = __toESM(require("./icons/UserEdit"));
var import_UserEmail = __toESM(require("./icons/UserEmail"));
var import_UserFavorite = __toESM(require("./icons/UserFavorite"));
var import_UserMinus = __toESM(require("./icons/UserMinus"));
var import_UserOff = __toESM(require("./icons/UserOff"));
var import_UserPlus = __toESM(require("./icons/UserPlus"));
var import_UserSettings = __toESM(require("./icons/UserSettings"));
var import_User = __toESM(require("./icons/User"));
var import_UsersEvent = __toESM(require("./icons/UsersEvent"));
var import_UsersGroup = __toESM(require("./icons/UsersGroup"));
var import_Users = __toESM(require("./icons/Users"));
var import_Vacation = __toESM(require("./icons/Vacation"));
var import_Vault = __toESM(require("./icons/Vault"));
var import_VideoCameraOff = __toESM(require("./icons/VideoCameraOff"));
var import_VideoCameraPlus = __toESM(require("./icons/VideoCameraPlus"));
var import_VideoCamera = __toESM(require("./icons/VideoCamera"));
var import_Virus = __toESM(require("./icons/Virus"));
var import_Visualstudio = __toESM(require("./icons/Visualstudio"));
var import_VoiceRecordingAlt = __toESM(require("./icons/VoiceRecordingAlt"));
var import_VoiceRecording = __toESM(require("./icons/VoiceRecording"));
var import_Voicemail = __toESM(require("./icons/Voicemail"));
var import_VolumeCancel = __toESM(require("./icons/VolumeCancel"));
var import_VolumeMax = __toESM(require("./icons/VolumeMax"));
var import_VolumeMin = __toESM(require("./icons/VolumeMin"));
var import_VolumeOff = __toESM(require("./icons/VolumeOff"));
var import_Volume = __toESM(require("./icons/Volume"));
var import_VoucherFood = __toESM(require("./icons/VoucherFood"));
var import_Vuejs = __toESM(require("./icons/Vuejs"));
var import_WalletAlt01 = __toESM(require("./icons/WalletAlt01"));
var import_WalletAlt02 = __toESM(require("./icons/WalletAlt02"));
var import_WalletAlt03 = __toESM(require("./icons/WalletAlt03"));
var import_Wallet = __toESM(require("./icons/Wallet"));
var import_WashingMachine = __toESM(require("./icons/WashingMachine"));
var import_WaterDrop = __toESM(require("./icons/WaterDrop"));
var import_WaterGlass = __toESM(require("./icons/WaterGlass"));
var import_WaterWaveBig = __toESM(require("./icons/WaterWaveBig"));
var import_WaterWaves = __toESM(require("./icons/WaterWaves"));
var import_Wc = __toESM(require("./icons/Wc"));
var import_Webcam = __toESM(require("./icons/Webcam"));
var import_Weight = __toESM(require("./icons/Weight"));
var import_Wheelchair = __toESM(require("./icons/Wheelchair"));
var import_Whiteboard = __toESM(require("./icons/Whiteboard"));
var import_WifiOff = __toESM(require("./icons/WifiOff"));
var import_Wifi = __toESM(require("./icons/Wifi"));
var import_WindEnergyAlt = __toESM(require("./icons/WindEnergyAlt"));
var import_WindEnergy = __toESM(require("./icons/WindEnergy"));
var import_WindStrong = __toESM(require("./icons/WindStrong"));
var import_Wind = __toESM(require("./icons/Wind"));
var import_X = __toESM(require("./icons/X"));
var import_Xing = __toESM(require("./icons/Xing"));
var import_XlsDownload = __toESM(require("./icons/XlsDownload"));
var import_XlsFile = __toESM(require("./icons/XlsFile"));
var import_Xls = __toESM(require("./icons/Xls"));
var import_Youtube = __toESM(require("./icons/Youtube"));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Activity,
  AddressBook,
  AirConditioner,
  Airbnb,
  Airplane,
  AirplaneAlt01,
  AirplaneAlt02,
  Airplay,
  Alarm,
  AlarmCancel,
  AlarmCheck,
  AlarmMinus,
  AlarmOff,
  AlarmPlus,
  AlarmSnooze,
  AlertCircle,
  AlertOctagon,
  AlertSquare,
  AlertTriangle,
  AlignBottom,
  AlignHorizontalCenter,
  AlignLeft,
  AlignRight,
  AlignTextCenter,
  AlignTextJustifyAll,
  AlignTextJustifyCenter,
  AlignTextJustifyLeft,
  AlignTextJustifyRight,
  AlignTextLeft,
  AlignTextRight,
  AlignTop,
  AlignVerticalCenter,
  Alpha,
  AnalyzeVoice,
  Anchor,
  Android,
  Angularjs,
  Annotation,
  AnnotationAlert,
  AnnotationCheck,
  AnnotationDots,
  AnnotationInfo,
  AnnotationPlus,
  AnnotationQuestion,
  AnnotationText,
  Announcement,
  AnnouncementAlt01,
  AnnouncementAlt02,
  Apple,
  Apps,
  Apron,
  Archive,
  ArrowCircleDown,
  ArrowCircleDownLeft,
  ArrowCircleDownRight,
  ArrowCircleLeft,
  ArrowCircleRight,
  ArrowCircleUp,
  ArrowCircleUpLeft,
  ArrowCircleUpRight,
  ArrowDown,
  ArrowDownLeft,
  ArrowDownRight,
  ArrowElbowDownLeft,
  ArrowElbowDownRight,
  ArrowElbowLeftDown,
  ArrowElbowLeftUp,
  ArrowElbowRightDown,
  ArrowElbowRightUp,
  ArrowElbowUpLeft,
  ArrowElbowUpRight,
  ArrowLeft,
  ArrowRight,
  ArrowSplitDown,
  ArrowSplitDownAlt,
  ArrowSplitLeft,
  ArrowSplitLeftAlt,
  ArrowSplitRight,
  ArrowSplitRightAlt,
  ArrowSplitUp,
  ArrowSplitUpAlt,
  ArrowUp,
  ArrowUpLeft,
  ArrowUpRight,
  At,
  Atm,
  Atom,
  AtomEditor,
  Attachment,
  AttachmentAlt01,
  AttachmentAlt02,
  Australia,
  BabyChanging,
  Backpack,
  BackpackAlt,
  Bacon,
  BaconAlt,
  Badge,
  Bandcamp,
  Bank,
  Banknote,
  BanknoteDollar,
  Banknotes,
  Barbell,
  Barcode,
  Bash,
  Bathtub,
  BatteryHorizontalCharging,
  BatteryHorizontalEmpty,
  BatteryHorizontalFull,
  BatteryHorizontalHalf,
  BatteryHorizontalLow,
  BatteryHorizontalTwoThirds,
  BatteryHorizontalVeryLow,
  BatteryVerticalCharging,
  BatteryVerticalEmpty,
  BatteryVerticalFull,
  BatteryVerticalHalf,
  BatteryVerticalLow,
  BatteryVerticalTwoThirds,
  BatteryVerticalVeryLow,
  Beaker,
  BeakerAlt,
  BeakerEmpty,
  BeakerEmptyAlt,
  Bed,
  BedLinen,
  BedLinenAlt,
  Beehiiv,
  Beer,
  BeerAlt,
  Behance,
  Bereal,
  Beta,
  Bike,
  Binoculars,
  Blanket,
  BloodDrop,
  BloodDropMinus,
  BloodDropPlus,
  BloodPressure,
  Bluesky,
  Bluetooth,
  BluetoothConnect,
  BluetoothOff,
  BluetoothSignal,
  Boat,
  BodyFlexibility,
  Book,
  BookOpen,
  Bookmark,
  BookmarkAdd,
  BookmarkCancel,
  BookmarkCheck,
  BookmarkMinus,
  Bootstrap,
  Brackets,
  Breakfast,
  Briefcase,
  BriefcaseAlt,
  Bug,
  Building,
  BuildingAlt01,
  BuildingAlt02,
  BuildingAlt03,
  BuildingAlt04,
  BuildingAlt05,
  Burglar,
  Bus,
  BusMini,
  BusNight,
  C,
  CPlusPlus,
  CSharp,
  CableCar,
  Cafe,
  Calculator,
  Calendar,
  CalendarCancel,
  CalendarCheck,
  CalendarDate,
  CalendarDates,
  CalendarLeft,
  CalendarMinus,
  CalendarOff,
  CalendarPlus,
  CalendarRight,
  CalendarTime,
  Camping,
  Car,
  CarElectric,
  CarbonDioxide,
  CarbonOffset,
  Cat,
  CellTower,
  Certificate,
  ChargingStation,
  ChartAppearance,
  ChartAppearanceAlt,
  ChartBar,
  ChartBarAlt,
  ChartBarDown,
  ChartBarDownAlt,
  ChartBarSquare,
  ChartBarSquareDown,
  ChartBarSquarePlus,
  ChartBarSquareUp,
  ChartBarUp,
  ChartBarUpAlt,
  ChartDonut,
  ChartLine,
  ChartLineData,
  ChartLineDown,
  ChartLineSmooth,
  ChartLineUp,
  ChartNumber,
  ChartPie,
  ChartPieAlt01,
  ChartPieAlt02,
  ChartPortfolioBubble,
  ChartRadar,
  ChartTable,
  Chat,
  ChatBubble,
  ChatBubbleAlert,
  ChatBubbleCancel,
  ChatBubbleCheck,
  ChatBubbleDots,
  ChatBubbleInfo,
  ChatBubbleList,
  ChatBubblePlus,
  ChatBubbleText,
  Check,
  CheckAlt,
  CheckCircle,
  CheckCircleAlt01,
  CheckCircleAlt02,
  CheckCircleAlt03,
  CheckDouble,
  CheckVerified,
  Checkbox,
  ChevronDown,
  ChevronDownSmall,
  ChevronLeft,
  ChevronLeftSmall,
  ChevronRight,
  ChevronRightSmall,
  ChevronUp,
  ChevronUpSmall,
  Chicken,
  ChickenLeg,
  Chip,
  ChromeCast,
  Circle,
  CircleCrossed,
  CircleDashed,
  City,
  CityAlt,
  Cleaver,
  Clipboard,
  ClipboardCancel,
  ClipboardCheck,
  ClipboardData,
  ClipboardEdit,
  ClipboardList,
  ClipboardMinus,
  ClipboardPlus,
  Close,
  CloseCircle,
  Closet,
  Cloud,
  CloudAlt01,
  CloudAlt02,
  CloudOff,
  Clouds,
  Cloudy,
  CloudyNight,
  CloudyPartly,
  CloudyPartlyNight,
  Clubhouse,
  Cobra,
  Code,
  CodeAlt,
  CodeBranch,
  CodeCircle,
  CodeCommitHorizontal,
  CodeCommitVertical,
  CodeCompare,
  CodeDeploy,
  CodeFork,
  CodeForkAlt,
  CodeMerge,
  CodePackage,
  CodePullRequest,
  CodeSquare,
  Codepen,
  Coins,
  CoinsStack,
  Colors,
  ColumnPlus,
  ColumnsFour,
  ColumnsThree,
  ColumnsTwo,
  ColumnsTwoAlt,
  Compare,
  ComponentAccordion,
  ComponentButton,
  ComponentCard,
  ComponentCarouselHorizontal,
  ComponentCarouselHorizontalAlt,
  ComponentCarouselList,
  ComponentCarouselVertical,
  ComponentCarouselVerticalAlt,
  ComponentCode,
  ComponentForm,
  ComponentTabs,
  ConciergeBell,
  Conference,
  Confetti,
  Connectivity,
  ConnectivityAlt,
  ConnectivityLan,
  ConnectivityTenancy,
  Console,
  Contra,
  Copy,
  CopyAll,
  Cow,
  Cradle,
  CreditCard,
  CreditCardAlt,
  CreditCardCancel,
  CreditCardCancelAlt,
  CreditCardCheck,
  CreditCardCheckAlt,
  CreditCardEdit,
  CreditCardEditAlt,
  CreditCardMinus,
  CreditCardMinusAlt,
  CreditCardOff,
  CreditCardOffAlt,
  CreditCardPlus,
  CreditCardPlusAlt,
  CreditCardProtection,
  CreditCardProtectionAlt,
  CreditCards,
  Crop,
  Crown,
  CrystalBall,
  Css3,
  Csv,
  CsvDownload,
  CsvFile,
  Cube,
  CubeAlt,
  CubeAlt02,
  Currency,
  CurrencyBaht,
  CurrencyDollar,
  CurrencyEuro,
  CurrencyExchange,
  CurrencyLira,
  CurrencyPound,
  CurrencyRuble,
  CurrencyRupee,
  CurrencyWon,
  CurrencyYen,
  Cursor,
  CursorAlt,
  CursorArrow,
  CursorClick,
  CursorCrosshair,
  CursorHand,
  CursorHandAlt,
  CursorPointer,
  CursorPointerAlt,
  CursorText,
  CustomerSupport,
  DataCloud,
  DataCloudCheck,
  DataCloudDownload,
  DataCloudOff,
  DataCloudUpload,
  Database,
  DatabaseAlt,
  Delete,
  Delivery,
  DentalChair,
  DentalFloss,
  DentalForceps,
  DentalMirror,
  Deskphone,
  Devices,
  DevicesAlt,
  DiamondGem,
  Dinner,
  Discord,
  DistributeHorizontalSpacing,
  DistributeVerticalSpacing,
  Django,
  Dna,
  Docker,
  Dog,
  Download,
  DownloadCircle,
  DragHandle,
  DragIndicator,
  DrawingCompass,
  Dribbble,
  Drupal,
  Ecg,
  Edit,
  EditLine,
  EditOff,
  EditSquare,
  Eftpos,
  EftposAlt,
  Egg,
  EggBoiled,
  EggCracked,
  Electronjs,
  Elevator,
  Elm,
  Email,
  EmailAlert,
  EmailAlt,
  EmailEdit,
  EmailFast,
  EmailForward,
  EmailNew,
  EmailOpen,
  EmailOpenAlt,
  EmailRead,
  EmailVirus,
  EmergencyHealth,
  EmergencySiren,
  Enterprise,
  Equal,
  EqualNot,
  Erase,
  Escalator,
  Etsy,
  Expand,
  ExpandSidebar,
  Explore,
  Export,
  Expressjs,
  Eye,
  EyeOff,
  EyeScan,
  FaceHappy,
  FaceId,
  FaceNeutral,
  FaceSad,
  FaceSmile,
  FaceWink,
  Facebook,
  FastBackward,
  FastForward,
  Feather,
  FerrisWheel,
  Figma,
  File,
  FileCancel,
  FileCheck,
  FileCode,
  FileDownload,
  FileEdit,
  FileList,
  FileMedical,
  FileMinus,
  FilePlus,
  FileSearch,
  FileText,
  FileUpload,
  Files,
  Filter,
  FilterAlt,
  FilterOff,
  Fingerprint,
  FingerprintAlt,
  Fire,
  FireExtinguisher,
  FireOff,
  FireTruck,
  Firebase,
  Fiverr,
  Flag,
  FlagAlt,
  Flame,
  FlameOff,
  Flash,
  FlashDouble,
  FlashOff,
  FlipHorizontal,
  FlipHorizontalAlt,
  FlipVertical,
  FlipVerticalAlt,
  Flutter,
  Fog,
  Folder,
  FolderBlocked,
  FolderCancel,
  FolderCheck,
  FolderCode,
  FolderDownload,
  FolderEdit,
  FolderLocked,
  FolderMedical,
  FolderMinus,
  FolderOpen,
  FolderPlus,
  FolderSearch,
  FolderUpload,
  Folders,
  Framer,
  GasStation,
  GenderFemale,
  GenderMale,
  GenerateFile,
  GenerateImage,
  GenerateText,
  Gift,
  Giraffe,
  Git,
  Github,
  Gitlab,
  Glasses,
  GlassesAlt,
  Globe,
  GlobeAlt01,
  GlobeAlt02,
  Goat,
  Google,
  GraduationCap,
  GraduationCapAlt,
  Grid,
  GridAlt,
  GridPlus,
  Gumroad,
  Hacker,
  HairDryer,
  HalloweenCandle,
  HalloweenCandy,
  HalloweenCat,
  HalloweenCauldron,
  HalloweenCoffin,
  HalloweenGhost,
  HalloweenLollipop,
  HalloweenPumpkin,
  HalloweenSkull,
  HalloweenSpellbook,
  HalloweenSpider,
  HalloweenTomb,
  HalloweenWizardHat,
  HandSupport,
  HandsSupport,
  Hanger,
  Hashtag,
  HashtagAlt,
  Haze,
  HazeNight,
  Headphones,
  HealthCross,
  HealthServices,
  Heart,
  HelpCircle,
  HelpOctagon,
  HelpSquare,
  Hexagon,
  HexagonAlt,
  HideSidebar,
  Home,
  HomeAlt01,
  HomeAlt02,
  Hospital,
  Hotel,
  Hourglass,
  Html5,
  Hurricane,
  IdentificationCard,
  Image,
  ImageAlt,
  ImageCopy,
  ImageOff,
  ImageOffAlt,
  ImagePlus,
  Import,
  Inbox,
  InboxAlt,
  InboxIn,
  InboxInAlt,
  InboxOut,
  InboxOutAlt,
  Incognito,
  Infinity,
  InfinityAlt,
  InfoCircle,
  InfoOctagon,
  InfoSquare,
  Instagram,
  InteractiveVoiceResponse,
  InterdentalBrush,
  Invoice,
  Iot,
  IotAlt,
  Java,
  Javascript,
  Jpg,
  JpgDownload,
  JpgFile,
  Kettle,
  Key,
  KeyAlt,
  KeyOff,
  KeyOffAlt,
  Keyboard,
  KeyboardOff,
  KitchenTools,
  Knife,
  KnifeSharpener,
  Kotlin,
  Label,
  LabelImportant,
  LabelOff,
  LanguageEnglish,
  Laptop,
  Layers,
  LayersTwo,
  Layout,
  LayoutAlt01,
  LayoutAlt02,
  LayoutKanban,
  Leaf,
  Leafs,
  Lemonsqueezy,
  License,
  LicenseDraft,
  LicenseThirdParty,
  LightbulbOff,
  LightbulbOn,
  Lighthouse,
  Link,
  LinkAlt01,
  LinkAlt02,
  LinkBroken,
  LinkBrokenAlt01,
  LinkBrokenAlt02,
  LinkExternal,
  LinkOff,
  Linkedin,
  Linux,
  Lion,
  ListBulleted,
  ListNumbered,
  Loan,
  LocationMy,
  LocationPin,
  LocationPinAlert,
  LocationPinCancel,
  LocationPinCheck,
  LocationPinMinus,
  LocationPinOff,
  LocationPinPlus,
  Lock,
  LockAlt01,
  LockAlt02,
  LockOpen,
  LockOpenAlt01,
  LockOpenAlt02,
  LogIn,
  LogOut,
  Lottery,
  LoyaltyCard,
  LoyaltyCardAlt,
  LoyaltyCardBarcode,
  Luggage,
  Lunch,
  MagicWand,
  MagicWandOff,
  Magnet,
  Map,
  Mastodon,
  Maximize,
  MaximizeAlt01,
  MaximizeAlt02,
  MaximizeAlt03,
  MeatBoxed,
  MeatBoxedChicken,
  Medication,
  Medium,
  MeetAndGreet,
  Menu,
  MenuAlt01,
  MenuAlt02,
  MenuAlt03,
  MenuClose,
  MergeRight,
  MergeRightAlt,
  MergeUp,
  MergeUpAlt,
  Messenger,
  Meta,
  Microphone,
  MicrophoneOff,
  Microscope,
  MicrosoftTeams,
  Microwave,
  Milestone,
  Minimize,
  MinimizeAlt01,
  Minus,
  MinusCircle,
  Mobile,
  Monitor,
  Monkey,
  Moon,
  MoonAlt,
  Moped,
  MoreHorizontal,
  MoreVertical,
  Mortgage,
  Mouse,
  Move,
  MuscleFlex,
  Music,
  MusicOff,
  Nachos,
  Navigation,
  Nextjs,
  Nodejs,
  Notification,
  NotificationAlert,
  NotificationCancel,
  NotificationCheck,
  NotificationMinus,
  NotificationNew,
  NotificationOff,
  NotificationPlus,
  NotificationRinging,
  NotificationSnooze,
  Notion,
  Npm,
  Number0,
  Number1,
  Number2,
  Number3,
  Number4,
  Number5,
  Number6,
  Number7,
  Number8,
  Number9,
  Numbers,
  Octagon,
  Openai,
  OriginalSize,
  Package,
  PackageDelivery,
  PackageDeliveryFast,
  PaintBrush,
  PaintBrushAlt,
  PalmTree,
  Panda,
  PaperBag,
  Parking,
  ParkingGarage,
  Password,
  Patreon,
  PauseCircle,
  Pdf,
  PdfDownload,
  PdfFile,
  PetFriendly,
  Phone,
  PhoneCancel,
  PhoneFast,
  PhoneForward,
  PhoneIncoming,
  PhoneIncomingForward,
  PhoneOff,
  PhoneOutgoing,
  PhoneRouting,
  PhotoCamera,
  PhotoCameraOff,
  Php,
  Pig,
  PiggyBank,
  Pill,
  PillsAlt01,
  PillsAlt02,
  Pin,
  Pinterest,
  Planet,
  Plaster,
  Play,
  PlayCircle,
  Plug,
  Plus,
  PlusCircle,
  Png,
  PngDownload,
  PngFile,
  Podcast,
  Pool,
  Postgresql,
  Printer,
  PrinterOff,
  PrivateDriver,
  PublicSpeaking,
  PuzzlePiece,
  Python,
  Quora,
  R,
  Rabbit,
  Radar,
  RadarAlt01,
  RadarAlt02,
  RadioButton,
  Rain,
  RainDrizzle,
  RainHeavy,
  Raindrop,
  Raindrops,
  RaindropsAlt,
  React,
  Receipt,
  ReceiptAlt,
  Recycle,
  Redo,
  Refresh,
  RefreshCcw,
  RefreshCw,
  Regenerate,
  Reply,
  ReplyAll,
  Restaurant,
  RestaurantMenu,
  Rhino,
  Roadmap,
  Robot,
  Rocket,
  RowPlus,
  RowsFour,
  RowsThree,
  RowsTwo,
  RowsTwoAlt,
  Ruler,
  Sailboat,
  Salami,
  Sale,
  SaleAlt,
  Sausages,
  SausagesAlt,
  Scale,
  ScaleBodyWeight,
  Scalpel,
  Scooter,
  ScooterAlt,
  Search,
  SearchAlert,
  SearchAlt,
  SearchCancel,
  SearchCheck,
  SearchMinus,
  SearchPlus,
  SearchProtection,
  SearchVirus,
  Seat,
  SeatChild,
  SeatReclining,
  SecurityCamera,
  Send,
  SendAlt01,
  SendAlt02,
  Server,
  ServerAlt,
  ServerPbx,
  ServerPbxAlt,
  Settings,
  SettingsAdjustHorizontal,
  SettingsAdjustVertical,
  SettingsAlt,
  ShareAndroid,
  ShareIos,
  ShareWindows,
  Sheep,
  Shield,
  ShieldAlert,
  ShieldCancel,
  ShieldCheck,
  ShieldLock,
  ShieldMinus,
  ShieldOff,
  ShieldPerson,
  ShieldPlus,
  ShipSteeringWheel,
  ShoppingBag,
  ShoppingBagCancel,
  ShoppingBagCheck,
  ShoppingBagMinus,
  ShoppingBagOff,
  ShoppingBagPlus,
  ShoppingBasket,
  ShoppingBasketCancel,
  ShoppingBasketCheck,
  ShoppingBasketMinus,
  ShoppingBasketOff,
  ShoppingBasketPlus,
  Shower,
  Sidebar,
  SidebarAlt,
  Sigma,
  Signpost,
  SimCard,
  SkipBack,
  SkipForward,
  Slack,
  SmartWatch,
  SmokeDetector,
  SmokeFree,
  Smoking,
  Snacks,
  Snapchat,
  Snow,
  Snowflake,
  SnowflakeAlt,
  Socket,
  Sofa,
  SolarEnergy,
  SolarEnergyAlt,
  Soundcloud,
  SpacingHeight,
  SpacingWidth,
  Sparks,
  SparksAlt,
  Speaker,
  Spotify,
  Sprout,
  Sql,
  Square,
  SquareDashed,
  SquareRounded,
  SquareRoundedDashed,
  Stairs,
  Stamp,
  Star,
  Steak,
  SteakGrilled,
  Steps,
  StickyNote,
  StopCircle,
  Store,
  Student,
  Substack,
  Sun,
  Sunrise,
  Sunset,
  Support,
  Surfboard,
  SustainableEnergy,
  Svetle,
  Svg,
  SvgDownload,
  SvgFile,
  SwapHorizontal,
  SwapVertical,
  Swift,
  Switch,
  Sync,
  Syringe,
  Tablet,
  Tag,
  Tailwind,
  Tapas,
  Taxi,
  Telegram,
  Telescope,
  Temperature,
  TemperatureCelsius,
  TemperatureCold,
  TemperatureFahrenheit,
  TemperatureHot,
  TermDeposit,
  TermDepositAlt,
  Terminal,
  TerminalCircle,
  TerminalSquare,
  TextBold,
  TextClearFormat,
  TextColor,
  TextFont,
  TextItalic,
  TextLetterSpacing,
  TextLineHeight,
  TextStrikethrough,
  TextUnderline,
  Thermometer,
  Threads,
  ThumbsDown,
  ThumbsUp,
  Thunderstorm,
  ThunderstormStrong,
  Ticket,
  TicketAlt,
  TicketOff,
  TicketOffAlt,
  Tiktok,
  Time,
  TimeBack,
  TimeRefresh,
  TimeUpdate,
  Timer,
  TimerCancel,
  TimerCheck,
  TimerMinus,
  TimerOff,
  TimerPlus,
  Toast,
  ToastButter,
  Toaster,
  Toilet,
  Tool,
  ToolAlt,
  Tooth,
  ToothBraces,
  ToothBridge,
  ToothCheckUp,
  ToothChipped,
  ToothClean,
  ToothCrack,
  ToothCrown,
  ToothDamaged,
  ToothExtraction,
  ToothFilling,
  ToothFissureSealing,
  ToothGum,
  ToothGumInflammation,
  ToothGumProtection,
  ToothImplant,
  ToothImplantCrown,
  ToothProtection,
  ToothRootCanal,
  ToothVeneer,
  ToothXRay,
  Toothbrush,
  ToothbrushAlt,
  Tornado,
  Tos,
  Tractor,
  Train,
  Translate,
  TranslateAlt,
  Trash,
  TrashAlt,
  TrashCancel,
  Tree,
  TrendDown,
  TrendUp,
  Triangle,
  TriangleDashed,
  Trophy,
  TrophyAlt,
  Truck,
  TumbleDryer,
  Tumblr,
  TuneHorizontal,
  TuneHorizontalAlt,
  TuneVertical,
  TuneVerticalAlt,
  Tv,
  Twitch,
  Twitter,
  Typescript,
  Umbrella,
  UmbrellaAlt01,
  UmbrellaAlt02,
  Unarchive,
  Undo,
  UnfoldLess,
  UnfoldMore,
  Unity,
  Upload,
  UploadCircle,
  Usb,
  UsbOff,
  UsbStick,
  User,
  UserAlert,
  UserCancel,
  UserCheck,
  UserCircle,
  UserEdit,
  UserEmail,
  UserFavorite,
  UserMinus,
  UserOff,
  UserPlus,
  UserSettings,
  Users,
  UsersEvent,
  UsersGroup,
  Vacation,
  Vault,
  VideoCamera,
  VideoCameraOff,
  VideoCameraPlus,
  Virus,
  Visualstudio,
  VoiceRecording,
  VoiceRecordingAlt,
  Voicemail,
  Volume,
  VolumeCancel,
  VolumeMax,
  VolumeMin,
  VolumeOff,
  VoucherFood,
  Vuejs,
  Wallet,
  WalletAlt01,
  WalletAlt02,
  WalletAlt03,
  WashingMachine,
  WaterDrop,
  WaterGlass,
  WaterWaveBig,
  WaterWaves,
  Wc,
  Webcam,
  Weight,
  Wheelchair,
  Whiteboard,
  Wifi,
  WifiOff,
  Wind,
  WindEnergy,
  WindEnergyAlt,
  WindStrong,
  X,
  Xing,
  Xls,
  XlsDownload,
  XlsFile,
  Youtube
});
