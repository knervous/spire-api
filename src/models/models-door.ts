import { ModelsItem } from './models-item';
export interface ModelsDoor {
    buffer?: number;
    client_version_mask?: number;
    content_flags?: string;
    content_flags_disabled?: string;
    dest_heading?: number;
    dest_instance?: number;
    dest_x?: number;
    dest_y?: number;
    dest_z?: number;
    dest_zone?: string;
    disable_timer?: number;
    door_param?: number;
    doorid?: number;
    doorisopen?: number;
    dz_switch_id?: number;
    guild?: number;
    heading?: number;
    id?: number;
    incline?: number;
    invert_state?: number;
    is_ldon_door?: number;
    item?: ModelsItem;
    keyitem?: number;
    lockpick?: number;
    max_expansion?: number;
    min_expansion?: number;
    name?: string;
    nokeyring?: number;
    opentype?: number;
    pos_x?: number;
    pos_y?: number;
    pos_z?: number;
    size?: number;
    triggerdoor?: number;
    triggertype?: number;
    version?: number;
    zone?: string;
}