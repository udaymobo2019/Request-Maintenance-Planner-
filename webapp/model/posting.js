var arrayOfCauseItems = [];
var breakd, oModel, eqi;
var ci_attach1, base64_marker, baseval = [],
	ci_obj1, ci_att1 = [];

var notnum, reportname, descrip1;
var arrayOfCause = [];
sap.ui.define(["sap/ui/base/Object",
	"sap/ui/model/odata/ODataModel",
	"sap/m/MessageBox"

], function (Object, ODataModel, MessageBox) {
	"use strict";
	return Object.extend("com.sap.build.ba293bd41-us_1.mobileRequestMaintenanceV5BNewdash.model.posting", {
		constructor: function (oParentView) {
			this._oParentView = oParentView;
		},
		

		checkDone: function () {

			var down = this._oParentView.byId("breakdown").getSelected();
			if (down === true) {

				breakd = "X";

			} else {
				breakd = "";
			}

			eqi = sap.ui.core.Fragment.byId("techfragment", "equip").getSelectedKey();
			var text = this._oParentView.byId("text").getValue();
			var descrip = this._oParentView.byId("descript").getValue();
			var arrayOfItems = [];
			var arrayOfCause = [];
			var message = true;
			var func1 = this._oParentView.byId("productInput").getValue();
			var SplitTotalFoot = func1.split(" ")
			var func = SplitTotalFoot[0];
			console.log("act_valu1 :", func1)
			var notif = this._oParentView.byId("notifif4").getSelectedKey();
			var prio = this._oParentView.byId("prio12").getSelectedKey();
			var name = this._oParentView.byId("report").getValue();
			var tech = this._oParentView.byId("productInput").getSelectedKey();
			var today = new Date();
			console.log("today1", today);
			var dd = String(today.getDate()).padStart(2, '0');
			console.log("dd", dd);
			var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
			console.log("mm", mm);
			var yyyy = today.getFullYear();
			console.log("yyyy", yyyy);
			today = yyyy + '-' + mm + '-' + dd + 'T' + '00' + ':' + '00' + ':' + '00';
			console.log("today2", today);
			var reqsta = this._oParentView.byId("startdate").getValue();
			var yy1 = reqsta.slice(6, 10);
			var mm1 = reqsta.slice(3, 5);
			var dat1 = reqsta.slice(0, 2);
			var reqir_star = yy1 + '-' + mm1 + '-' + dat1 + 'T' + '00' + ':' + '00' + ':' + '00';
			var reqend = this._oParentView.byId("enddate").getValue();
			var yy2 = reqend.slice(6, 10);
			var mm2 = reqend.slice(3, 5);
			var dat2 = reqend.slice(0, 2);
			var reqir_end = yy2 + '-' + mm2 + '-' + dat2 + 'T' + '00' + ':' + '00' + ':' + '00';
			var malfuncstart = this._oParentView.byId("malfunstart").getValue();
			var date = malfuncstart.slice(0, 2);
			var month = malfuncstart.slice(3, 5);
			var year = malfuncstart.slice(6, 10);
			var malfuncstartdate = year.concat(month, date);
			console.log("malfuncstartdate", malfuncstartdate)
			var malfuncend = this._oParentView.byId("malfunend").getValue();
			if (malfuncend == '') {
				var malfuncenddate = "00000000";
			} else {
				var date = malfuncend.slice(0, 2);
				var month = malfuncend.slice(3, 5);
				var year = malfuncend.slice(6, 10);
				var malfuncenddate = year.concat(month, date);
				console.log("malfuncenddate", malfuncenddate)

			}

			var malstarttime = this._oParentView.byId("TP6").getValue();
			if (malstarttime == '') {
				//	alert("if malstarttime")

				var malstarttime1 = "000000";

				//	alert(malstarttime1)
			} else {
				//	alert("else malstarttime")

				var ss1 = malstarttime.slice(6, 8);
				var mmm = malstarttime.slice(3, 5);
				var hh = malstarttime.slice(0, 2);
				//	var malstarttime1 = 'PT' + hh + 'H' + mmm + 'M' + ss1 + 'S';

				var malstarttime1 = hh.concat(mmm, ss1);
				//	alert("malstarttime1", malstarttime1);
			}
			/*			var ss1 = malstarttime.slice(6, 8);
						var mmm = malstarttime.slice(3, 5);
						var hh = malstarttime.slice(0, 2);
						var malstarttime1 = 'PT' + hh + 'H' + mmm + 'M' + ss1 + 'S';*/
			//alert(malstarttime1)
			//////////////////// MALFUNCTION sTART TIME ///////////////////////////

			//////////////////// MALFUNCTION END TIME ///////////////////////////
			var malendtime = this._oParentView.byId("TP7").getValue();
			if (malendtime == '') {
				//	alert("if malendtime")

				var malendtime1 = "000000";

				//	alert(malendtime1)
			} else {
				//	alert("else malendtime")

				var ss1 = malendtime.slice(6, 8);
				var mmm = malendtime.slice(3, 5);
				var hh = malendtime.slice(0, 2);
				//	var malstarttime1 = 'PT' + hh + 'H' + mmm + 'M' + ss1 + 'S';

				var malendtime1 = hh.concat(mmm, ss1);
				//	alert("malendtime1", malendtime1);

				/*	var ss1 = malendtime.slice(6, 8);
					var mmm = malendtime.slice(3, 5);
					var hh = malendtime.slice(0, 2);
					var malendtime1 = 'PT' + hh + 'H' + mmm + 'M' + ss1 + 'S';*/

			}
			//////////////////// MALFUNCTION END TIME ///////////////////////////

			var tableid = this._oParentView.byId("idProductsTable");
			var eqpChg = this._oParentView.byId("equiptInp").getValue();
			//	alert(eqpChg)
			if (notif == '') {
				var bCompact = !!this._oParentView.$().closest(".sapUiSizeCompact").length;
				MessageBox.error(
					"Please select Notification type.", {
						styleClass: bCompact ? "sapUiSizeCompact" : ""
					}
				);
			} else if (func1 == '') {
				var bCompact = !!this._oParentView.$().closest(".sapUiSizeCompact").length;
				MessageBox.error(
					"Please select Technical object.", {
						styleClass: bCompact ? "sapUiSizeCompact" : ""
					}
				);

			} else if (prio == '') {
				var bCompact = !!this._oParentView.$().closest(".sapUiSizeCompact").length;
				MessageBox.error(
					"Please select priority.", {
						styleClass: bCompact ? "sapUiSizeCompact" : ""
					}
				);

			} else if (reqir_star == '') {
				var bCompact = !!this._oParentView.$().closest(".sapUiSizeCompact").length;
				MessageBox.error(
					"Please select Requierd start date.", {
						styleClass: bCompact ? "sapUiSizeCompact" : ""
					}
				);

			} else if (reqir_end == '') {
				var bCompact = !!this._oParentView.$().closest(".sapUiSizeCompact").length;
				MessageBox.error(
					"Please select Requierd end date.", {
						styleClass: bCompact ? "sapUiSizeCompact" : ""
					}
				);

			} else if (descrip == '') {
				var bCompact = !!this._oParentView.$().closest(".sapUiSizeCompact").length;
				MessageBox.error(
					"Please write description.", {
						styleClass: bCompact ? "sapUiSizeCompact" : ""
					}
				);

			} else if (malfuncstart == '') {
				var bCompact = !!this._oParentView.$().closest(".sapUiSizeCompact").length;
				MessageBox.error(
					"Please select Malfunction start date.", {
						styleClass: bCompact ? "sapUiSizeCompact" : ""
					}
				);

			}
			/*else if (malstarttime == '') {
						var bCompact = !!this._oParentView.$().closest(".sapUiSizeCompact").length;
						MessageBox.error(
							"Please select Malfunction Start Time.", {
								styleClass: bCompact ? "sapUiSizeCompact" : ""
							}
						);

					}*/
			else if (name == '') {
				var bCompact = !!this._oParentView.$().closest(".sapUiSizeCompact").length;
				MessageBox.error(
					"Please select Reporter.", {
						styleClass: bCompact ? "sapUiSizeCompact" : ""
					}
				);

			} else {
				var that = this;

				sap.m.MessageBox.show(
					"Do you want to Create Notification ?", {
						icon: sap.m.MessageBox.Icon.INFORMATION,
						title: "Confirmation Message",
						actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
						onClose: function (oAction) {
							// notify user
							if (oAction == "YES") {
								var tablelength = tableid.getItems().length;
								console.log("TableLenth :", tablelength);
								for (var i = 0; i < tablelength; i++) {
									var rows = tableid.getItems()[i];
									var itemnumber = rows.getCells()[0].getText();
									var object1 = rows.getCells()[1].getText();
									var object2 = object1.split(":");
									var object = object2[0];
									var objectcode1 = rows.getCells()[2].getText();
									var objectcode2 = objectcode1.split(":");
									var objectcode = objectcode2[0];
									var damage1 = rows.getCells()[3].getText();
									var damage2 = damage1.split(":");
									var damage = damage2[0];
									var damagecode1 = rows.getCells()[4].getText();
									var damagecode2 = damagecode1.split(":");
									var damagecode = damagecode2[0];
									var causegroup1 = rows.getCells()[5].getText();
									var causegroup2 = causegroup1.split(":");
									var causegroup = causegroup2[0];
									var causecode = rows.getCells()[6].getText();
									var causetext = causecode.split(":");
									var causecode1 = causetext[0];
									var causetext = causetext[1];

									var obj = {
										"ImNotifType": " ",
										"Refobjectkey": " ",
										"ItemSortNo": "0001",
										"Descript": "",
										"DCodegrp": object,
										"DCode": objectcode,
										"DlCodegrp": damage,
										"DlCode": damagecode,
										"Assembly": "T-FS101",
										"AssemblyExternal": " ",
										"AssemblyGuid": " ",
										"AssemblyVersion": " ",
										"StartPoint": " ",
										"EndPoint": " ",
										"LinearLength": " ",
										"LinearUnit": " ",
										"LinearUnitIso": " ",
										"FirstOffsetTypeCode": " ",
										"FirstOffsetValue": " ",
										"FirstOffsetUnit": " ",
										"FirstOffsetUnitIso": " ",
										"SecondOffsetTypeCode": " ",
										"SecondOffsetValue": " ",
										"SecondOffsetUnit": " ",
										"SecondOffsetUnitIso": " ",
										"Equipment": eqi,
										"FunctLoc": " ",
										"MarkerStartPoint": " ",
										"MarkerDistanceStartPoint": " ",
										"MarkerEndPoint": " ",
										"MarkerDistanceEndPoint": " ",
										"MarkerDistanceUnit": " ",
										"MarkerDistanceUnitIso": " "
									};

									console.log("obj", obj);

									arrayOfItems.push(obj);
									var causeObj = {
										ItemKey: itemnumber,
										CauseKey: "",
										CauseCodeGrp: causegroup,
										CauseCode: causecode1,
										CauseText: causetext
									};

									console.log("causeObj", causeObj);

									arrayOfCause.push(causeObj);
									console.log(arrayOfCause);

								}

								var oModel3 = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/", true);
								var postdata = {
									"NotifNo": " ",
									"Equipment": eqi,
									"FunctLoc": func,
									"Priority": prio,
									"Desstdate": today,
									"Desenddate": reqir_end,
									"ShortText": descrip,
									"SysStatus": " ",
									"PmWkctr": "",
									"UserSt": " ",
									"Userstatus": " ",
									"Planplant": "",
									"Maintroom": " ",
									"Plsectn": " ",
									"Maintloc": "",
									"Breakdown": breakd,
									"Strmlfndate": malfuncstartdate,
									"Endmlfndate": malfuncenddate,
									"Strmlfntime": malstarttime1,
									"Endmlfntime": malendtime1,
									"Unit": " ",
									"Plangroup": "",
									"Maintplant": "",
									"Reportedby": name,
									"PersonResponsible": " ",
									"NotifType": notif,
									"CreatedBy": "",
									"Notiftime": "000000",
									"NotifDate": today,
									"Abcindic": " ",
									"Sortfield": " ",
									"BusArea": " ",
									"CoArea": " ",
									"Costcenter": " ",
									"WbsElement": " ",
									"Type": " ",
									"Message": " ",
									"LongText": text,
									ToItems: arrayOfItems,
									ToCause: arrayOfCause
								};
								console.log("postdata", postdata);
								var sPath = "/NotificationCreatHeaderSet";
								oModel3.create(sPath, postdata, {
									success: function (oData, oResponse) {
										console.log(oData, "oData123");
										var msg1 = oData.Message;
										notnum = msg1.slice(13, 21);
										reportname = postdata.Reportedby;
										descrip1 = postdata.descrip;
										//	that.DMS();
										var typ = oData.Type;
										//	alert(typ)
										console.log(typ, "type");
										if (typ == "S") {
											jQuery.sap.require("sap.m.MessageBox");
											sap.m.MessageBox.confirm(msg1, {
												icon: sap.m.MessageBox.Icon.SUCCESS,
												title: "Success",
												actions: [sap.m.MessageBox.Action.OK],
												onClose: function (oAction) {
													if (oAction == "OK") {

														ci_att1 = that._oParentView.byId("UploadCollection").getItems().length;

														if (ci_att1 == '0') {

															window.location.reload();
														} else {

															that.DMS();

														}
													}
												}.bind(this)
											});
											message = false;
										} else {
											sap.m.MessageBox.warning(msg1, {
												icon: sap.m.MessageBox.Icon.WARNING,
												title: "Warning",
												actions: [sap.m.MessageBox.Action.OK],

												onClose: function (oAction) {
													if (oAction == "OK") {
														arrayOfItems = [];
													}
												}.bind(this)
											});
											message = false;
										}
									}
								});
							}
						}
					});

			};
		},
		posting: function () {

			var type = this._oParentView.byId("notifif4").getSelectedKey();
			if (type === 'M2') {
				this.checkDone();
			} else {

				//	alert("Posting");

				var today = new Date();
				console.log("today", today)

				var eqi = sap.ui.core.Fragment.byId("techfragment", "equip").getSelectedKey();
				this._oParentView.byId("equiptInp").setValue(eqi);
				this.eqpCh = eqi;
				var text = this._oParentView.byId("text").getValue();
				//	alert(text)
				var descrip = this._oParentView.byId("descript").getValue();
				//	alert(text);
				var arrayOfItems = [];
				var arrayOfCause = [];
				var message = true;
				var func1 = this._oParentView.byId("productInput").getValue();
				var SplitTotalFoot = func1.split(" ")
				var func = SplitTotalFoot[0];

				console.log("act_valu1 :", func1)
				var notif = this._oParentView.byId("notifif4").getSelectedKey();
				var prio = this._oParentView.byId("prio12").getSelectedKey();
				var name = this._oParentView.byId("report").getValue();
				var tech = this._oParentView.byId("productInput").getSelectedKey();

				var malfuncstart = this._oParentView.byId("malfunstart").getValue();
				console.log("malfuncstart", malfuncstart)
				var date = malfuncstart.slice(0, 2);
				var month = malfuncstart.slice(3, 5);
				var year = malfuncstart.slice(6, 10);
				var malfuncstartdate = year.concat(month, date);
				console.log("malfuncstartdate", malfuncstartdate)

				//	var yy1 = malfuncstart.slice(6, 10);
				//	var mm1 = malfuncstart.slice(3, 5);
				//	var dat1 = malfuncstart.slice(0, 2);
				//	var malfuncstartdate = yy1 + '-' + mm1 + '-' + dat1 + 'T' + '00' + ':' + '00' + ':' + '00';
				//	console.log("malfuncstartdate", malfuncstartdate)
				//////////////////// MALFUNCTION START TIME ///////////////////////////
				var malstarttime = this._oParentView.byId("TP6").getValue();

				if (malstarttime == '') {
					//	alert("if malstarttime")

					var malstarttime1 = "000000";

					//	alert(malstarttime1)
				} else {
					//	alert("else malstarttime")

					var ss1 = malstarttime.slice(6, 8);
					var mmm = malstarttime.slice(3, 5);
					var hh = malstarttime.slice(0, 2);
					//	var malstarttime1 = 'PT' + hh + 'H' + mmm + 'M' + ss1 + 'S';

					var malstarttime1 = hh.concat(mmm, ss1);
					//	alert("malstarttime1", malstarttime1);

					/*					var ss1 = malstarttime.slice(6, 8);
										var mmm = malstarttime.slice(3, 5);
										var hh = malstarttime.slice(0, 2);
										var malstarttime1 = 'PT' + hh + 'H' + mmm + 'M' + ss1 + 'S';*/

				}

				/*	var ss1 = malstarttime.slice(6, 8);
					var mmm = malstarttime.slice(3, 5);
					var hh = malstarttime.slice(0, 2);
					var malstarttime1 = 'PT' + hh + 'H' + mmm + 'M' + ss1 + 'S';*/
				//	console.log("malstarttime1", malstarttime1)
				//////////////////// MALFUNCTION START TIME ///////////////////////////
				//////////////////// MALFUNCTION END TIME ///////////////////////////
				var malendtime = this._oParentView.byId("TP7").getValue();

				if (malendtime == '') {
					//	alert("if malendtime")

					var malendtime1 = "000000";

					//	alert(malendtime1)
				} else {
					//	alert("else malendtime")

					var ss1 = malendtime.slice(6, 8);
					var mmm = malendtime.slice(3, 5);
					var hh = malendtime.slice(0, 2);
					//	var malstarttime1 = 'PT' + hh + 'H' + mmm + 'M' + ss1 + 'S';

					var malendtime1 = hh.concat(mmm, ss1);
					//	alert("malendtime1", malendtime1);

					/*					var ss1 = malendtime.slice(6, 8);
										var mmm = malendtime.slice(3, 5);
										var hh = malendtime.slice(0, 2);
										var malendtime1 = 'PT' + hh + 'H' + mmm + 'M' + ss1 + 'S';
										console.log("malendtime1", malendtime1)*/
				}
				//////////////////// MALFUNCTION END TIME ///////////////////////////
				/*				var ss1 = malendtime.slice(6, 8);
								var mmm = malendtime.slice(3, 5);
								var hh = malendtime.slice(0, 2);
								var malendtime1 = 'PT' + hh + 'H' + mmm + 'M' + ss1 + 'S';*/
				//	console.log("malendtime1", malendtime1)

				var today = new Date();
				var dd = String(today.getDate()).padStart(2, '0');
				var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
				var yyyy = today.getFullYear();
				today = yyyy + '-' + mm + '-' + dd + 'T' + '00' + ':' + '00' + ':' + '00';
				//	alert(today);
				var reqsta = this._oParentView.byId("startdate").getValue();
				//	alert(reqsta)
				var yy1 = reqsta.slice(6, 10);
				var mm1 = reqsta.slice(3, 5);
				var dat1 = reqsta.slice(0, 2);
				var reqir_star = yy1 + '-' + mm1 + '-' + dat1 + 'T' + '00' + ':' + '00' + ':' + '00';
				//	alert(reqir_star)
				var reqend = this._oParentView.byId("enddate").getValue();
				//	alert(reqend);
				var yy2 = reqend.slice(6, 10);
				var mm2 = reqend.slice(3, 5);
				var dat2 = reqend.slice(0, 2);
				var reqir_end = yy2 + '-' + mm2 + '-' + dat2 + 'T' + '00' + ':' + '00' + ':' + '00';
				var tableid = this._oParentView.byId("idProductsTable");
				var that = this;
				//////////////////// MALFUNCTION END DATE ///////////////////////////
				var malfuncend = this._oParentView.byId("malfunend").getValue();
				if (malfuncend == '') {
					//	alert("if malfuncend")

					var malfuncenddate = "00000000";

					//	alert(malfuncenddate)
				} else {
					//	alert("else malfuncend")

					var date = malfuncend.slice(0, 2);
					var month = malfuncend.slice(3, 5);
					var year = malfuncend.slice(6, 10);
					var malfuncenddate = year.concat(month, date);
					console.log("malfuncenddate", malfuncenddate)

					/*	var yy1 = malfuncend.slice(6, 10);
						var mm1 = malfuncend.slice(3, 5);
						var dat1 = malfuncend.slice(0, 2);
						var malfuncenddate = yy1 + '-' + mm1 + '-' + dat1 + 'T' + '00' + ':' + '00' + ':' + '00';
						alert(malfuncenddate);*/
				}
				//////////////////// MALFUNCTION END DATE ///////////////////////////

				if (notif == '') {
					var bCompact = !!this._oParentView.$().closest(".sapUiSizeCompact").length;
					MessageBox.error(
						"Please select Notification type.", {
							styleClass: bCompact ? "sapUiSizeCompact" : ""
						}
					);
				} else if (func == '') {
					var bCompact = !!this._oParentView.$().closest(".sapUiSizeCompact").length;
					MessageBox.error(
						"Please select Technical object.", {
							styleClass: bCompact ? "sapUiSizeCompact" : ""
						}
					);

				} else if (prio == '') {
					var bCompact = !!this._oParentView.$().closest(".sapUiSizeCompact").length;
					MessageBox.error(
						"Please select priority.", {
							styleClass: bCompact ? "sapUiSizeCompact" : ""
						}
					);

				} else if (reqir_star == '') {
					var bCompact = !!this._oParentView.$().closest(".sapUiSizeCompact").length;
					MessageBox.error(
						"Please select Requierd start date.", {
							styleClass: bCompact ? "sapUiSizeCompact" : ""
						}
					);

				} else if (reqir_end == '') {
					var bCompact = !!this._oParentView.$().closest(".sapUiSizeCompact").length;
					MessageBox.error(
						"Please select Requierd end date.", {
							styleClass: bCompact ? "sapUiSizeCompact" : ""
						}
					);

				} else if (descrip == '') {
					var bCompact = !!this._oParentView.$().closest(".sapUiSizeCompact").length;
					MessageBox.error(
						"Please write description.", {
							styleClass: bCompact ? "sapUiSizeCompact" : ""
						}
					);

				} else if (name == '') {
					var bCompact = !!this._oParentView.$().closest(".sapUiSizeCompact").length;
					MessageBox.error(
						"Please select reporter name.", {
							styleClass: bCompact ? "sapUiSizeCompact" : ""
						}
					);

				} else {

					sap.m.MessageBox.show(
						"Do you Want to Create Notification ?", {
							icon: sap.m.MessageBox.Icon.INFORMATION,
							title: "Confirmation Message",
							actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
							onClose: function (oAction) {
								// notify user
								if (oAction == "YES") {
									var tablelength = tableid.getItems().length;
									console.log("TableLenth :", tablelength);
									for (var i = 0; i < tablelength; i++) {
										var rows = tableid.getItems()[i];
										var itemnumber = rows.getCells()[0].getText();
										var object1 = rows.getCells()[1].getText();
										var object2 = object1.split(":");
										var object = object2[0];
										var objectcode1 = rows.getCells()[2].getText();
										var objectcode2 = objectcode1.split(":");
										var objectcode = objectcode2[0];
										var damage1 = rows.getCells()[3].getText();
										var damage2 = damage1.split(":");
										var damage = damage2[0];
										var damagecode1 = rows.getCells()[4].getText();
										var damagecode2 = damagecode1.split(":");
										var damagecode = damagecode2[0];
										var causegroup1 = rows.getCells()[5].getText();
										var causegroup2 = causegroup1.split(":");
										var causegroup = causegroup2[0];
										var causecode = rows.getCells()[6].getText();
										var causetext = causecode.split(":");
										var causecode1 = causetext[0];
										var causetext = causetext[1];

										var causetext = causecode.split(":");
										//alert(causetext);
										//console.log(descr)
										var causecode1 = causetext[0];
										var causetext = causetext[1];
										//alert(causecode1)
										//alert(causetext)

										var obj = {
											"ImNotifType": " ",
											"Refobjectkey": " ",
											"ItemSortNo": "0001",
											"Descript": "",
											"DCodegrp": object,
											"DCode": objectcode,
											"DlCodegrp": damage,
											"DlCode": damagecode,
											"Assembly": "T-FS101",
											"AssemblyExternal": " ",
											"AssemblyGuid": " ",
											"AssemblyVersion": " ",
											"StartPoint": " ",
											"EndPoint": " ",
											"LinearLength": " ",
											"LinearUnit": " ",
											"LinearUnitIso": " ",
											"FirstOffsetTypeCode": " ",
											"FirstOffsetValue": " ",
											"FirstOffsetUnit": " ",
											"FirstOffsetUnitIso": " ",
											"SecondOffsetTypeCode": " ",
											"SecondOffsetValue": " ",
											"SecondOffsetUnit": " ",
											"SecondOffsetUnitIso": " ",
											"Equipment": eqi,
											"FunctLoc": " ",
											"MarkerStartPoint": " ",
											"MarkerDistanceStartPoint": " ",
											"MarkerEndPoint": " ",
											"MarkerDistanceEndPoint": " ",
											"MarkerDistanceUnit": " ",
											"MarkerDistanceUnitIso": " "
										};

										console.log("obj", obj);

										arrayOfItems.push(obj);

										//**************************Cause item set *********************************//						
										var causeObj = {
											ItemKey: itemnumber,
											CauseKey: "",
											CauseCodeGrp: causegroup,
											CauseCode: causecode1,
											CauseText: causetext
										};
										arrayOfCause.push(causeObj);
									}

									var oModel3 = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/", true);
									var postdata = {
										"NotifNo": " ",
										"Equipment": eqi,
										"FunctLoc": func,
										"Priority": prio,
										"Desstdate": today,
										"Desenddate": reqir_end,
										"ShortText": descrip,
										"SysStatus": " ",
										"PmWkctr": "",
										"UserSt": " ",
										"Userstatus": " ",
										"Planplant": "",
										"Maintroom": " ",
										"Plsectn": " ",
										"Maintloc": "",
										"Breakdown": breakd,
										"Strmlfndate": malfuncstartdate, //malfuncstartdate
										"Endmlfndate": malfuncenddate, //malfuncenddate
										"Strmlfntime": malstarttime1, //malstarttime1
										"Endmlfntime": malendtime1, //malendtime1
										"Unit": " ",
										"Plangroup": "",
										"Maintplant": "",
										"Reportedby": name,
										"PersonResponsible": " ",
										"NotifType": notif,
										"CreatedBy": "",
										"Notiftime": "000000",
										"NotifDate": today,
										"Abcindic": " ",
										"Sortfield": " ",
										"BusArea": " ",
										"CoArea": " ",
										"Costcenter": " ",
										"WbsElement": " ",
										"Type": " ",
										"Message": " ",
										"LongText": text,
										ToItems: arrayOfItems,
										ToCause: arrayOfCause
											//	ToCause: arrayOfCauseItems,
									};
									console.log("posting", postdata);

									var sPath = "/NotificationCreatHeaderSet";
									oModel3.create(sPath, postdata, {
										success: function (oData, oResponse) {
											console.log(oData, "oData123");
											var msg1 = oData.Message;
											notnum = msg1.slice(13, 21);
											reportname = postdata.Reportedby;
											descrip1 = postdata.descrip;

											console.log("mes", msg1)
											var typ = oData.Type;
											console.log(typ, "type");
											if (typ == "S") {
												jQuery.sap.require("sap.m.MessageBox");
												sap.m.MessageBox.confirm(msg1, {
													icon: sap.m.MessageBox.Icon.SUCCESS,
													title: "Success",
													actions: [sap.m.MessageBox.Action.OK],
													onClose: function (oAction) {
														if (oAction == "OK") {
															ci_att1 = this._oParentView.byId("UploadCollection").getItems().length;

															if (ci_att1 == '0') {
																window.location.reload();
															} else {
																that.DMS();
															}
														}
													}.bind(that)
												});
												message = false;
											} else {
												sap.m.MessageBox.warning(msg1, {
													icon: sap.m.MessageBox.Icon.WARNING,
													title: "Warning",
													actions: [sap.m.MessageBox.Action.OK],

													onClose: function (oAction) {

														if (oAction == "OK") {
															arrayOfItems = [];

														}
													}.bind(that)

												});
												message = false;

											}

										}
									});

								}
							}
						});

				}
			}
		},
		/*			test1: function () {
					alert("SMD")
					 ci_att1 = this._oParentView.getModel("oGlobalModel").getProperty("/ci_att1");
					console.log("Array",ci_att1 );
					},*/

		DMS: function () {
			//	alert("SMD")

			ci_att1 = this._oParentView.getModel("oGlobalModel").getProperty("/ci_att1");
			console.log("Array", ci_att1);
			var oUploadCollection = this._oParentView.byId("UploadCollection");

			var arr1 = [];
			var arrp = [];
			var count = ci_att1.length;
			console.log("count :", count);

			for (var i = 0; i < count; i++) {
				var dmsdata = {
					"DocType": ci_att1[i].Ext,
					"FileName": ci_att1[i].Name,
					"Base64": ci_att1[i].Base64

				};
				arr1.push(dmsdata);
			}
			var obj = {
				"d": {
					"ProcessName": "Notification",
					"Description": descrip1,
					"Username": reportname,
					"NotificationNo": notnum,
					"To_DMSItems": arr1,
				}
			};
			arrp.push(obj);

			console.log(obj);
			var oModel1 = new ODataModel("/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/", true);
			var sPath = "/DMS_HeaderSet";

			oModel1.create(sPath, obj, {
				success: function (oData, oResponse) {
					console.log(oData);
					
					var msg = oData.ReturnMessage;
					var typ = oData.ReturnType;
					console.log(typ, "type");
					if (typ == "S") {
						jQuery.sap.require("sap.m.MessageBox");
						sap.m.MessageBox.confirm(msg, {
							icon: sap.m.MessageBox.Icon.SUCCESS,
							title: "Success",
							actions: [sap.m.MessageBox.Action.OK],
							onClose: function (oAction) {
								if (oAction == "OK") {
									window.location.reload();
								}
							}
						});

					} else {
						sap.m.MessageBox.warning(msg, {
							icon: sap.m.MessageBox.Icon.WARNING,
							title: "Warning",
							actions: [sap.m.MessageBox.Action.OK],

							onClose: function (oAction) {

								if (oAction == "OK") {
									window.location.reload();

								}
							}

						});

					}

				}
			});

		},

	});

});