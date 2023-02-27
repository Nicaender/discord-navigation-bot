export class Station {
    hafas_id: number;
    rmv_id: number;
    dhid: string;
    hst_name: string;
    name_fahrplan: string;
    x_ipl_wert: number;
    y_ipl_wert: number;
    x_wgs84: number;
    y_wgs84: number;
    lno: string;
    ist_bahnhof: number;
    gueltig_ab: string;
    gueltig_bis: string;
    verbund_1_istgleich_rmv: number;
    land: string;
    rp: string;
    landkreis: string;
    gemeindename: string;
    ortsteilname: string;
    ags_land: number;
    ags_rp: number;
    ags_lk: number;
    ags_g: number;
    ags_ot: number;

    constructor(data: any) {
        this.hafas_id = data.HAFAS_ID;
        this.rmv_id = data.RMV_ID;
        this.dhid = data.DHID;
        this.hst_name = data.HST_NAME;
        this.name_fahrplan = data.NAME_FAHRPLAN;
        this.x_ipl_wert = data.X_IPL_WERT;
        this.y_ipl_wert = data.Y_IPL_WERT;
        this.x_wgs84 = data.X_WGS84;
        this.y_wgs84 = data.Y_WGS84;
        this.lno = data.LNO;
        this.ist_bahnhof = data.IST_BAHNHOF;
        this.gueltig_ab = data.GUELTIG_AB;
        this.gueltig_bis = data.GUELTIG_BIS;
        this.verbund_1_istgleich_rmv = data.VERBUND_1_ISTGLEICH_RMV;
        this.land = data.LAND;
        this.rp = data.RP;
        this.landkreis = data.LANDKREIS;
        this.gemeindename = data.GEMEINDENAME;
        this.ortsteilname = data.ORTSTEILNAME;
        this.ags_land = data.AGS_LAND;
        this.ags_rp = data.AGS_RP;
        this.ags_lk = data.AGS_LK;
        this.ags_g = data.AGS_G;
        this.ags_ot = data.AGS_OT;
    }
}
