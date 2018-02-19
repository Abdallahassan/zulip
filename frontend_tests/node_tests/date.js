set_global('$', global.make_zjquery());
set_global('i18n', global.stub_i18n);

function format_date(date, include_hour) {
    var months = [i18n.t('January'), i18n.t('February'), i18n.t('March'),
                  i18n.t('April'), i18n.t('May'), i18n.t('June'),
                  i18n.t('July'), i18n.t('August'), i18n.t('September'),
                  i18n.t('October'), i18n.t('November'), i18n.t('December')];
    var month_str = months[date.getMonth()];
    var year = date.getFullYear();
    var day = date.getDate();
    if (include_hour) {
        var hour = date.getHours();

        var str = hour >= 12 ? "PM" : "AM";

        return month_str + " " + day + ", " + (hour % 12) + ":00" + str;
    }
    return month_str + ' ' + day + ', ' + year;
}

(function test_date() {
     var d = new Date("Mar 25 2015");
     var f = format_date(d, false);
     assert.equal(f, "translated: March 25, 2015");

     var d2 = new Date("Wed Mar 25 2015 01:00:00 GMT+0100 (CET)");
     var f2 = format_date(d2, true);
     assert.equal(f2, "translated: March 25, 0:00AM");
}());
