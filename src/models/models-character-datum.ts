import { ModelsAdventureStat } from './models-adventure-stat';
import { ModelsBuyer } from './models-buyer';
import { ModelsCharRecipeList } from './models-char-recipe-list';
import { ModelsCharacterActivity } from './models-character-activity';
import { ModelsCharacterAltCurrency } from './models-character-alt-currency';
import { ModelsCharacterAlternateAbility } from './models-character-alternate-ability';
import { ModelsCharacterAura } from './models-character-aura';
import { ModelsCharacterBandolier } from './models-character-bandolier';
import { ModelsCharacterBind } from './models-character-bind';
import { ModelsCharacterBuff } from './models-character-buff';
import { ModelsCharacterCorpse } from './models-character-corpse';
import { ModelsCharacterCurrency } from './models-character-currency';
import { ModelsCharacterDiscipline } from './models-character-discipline';
import { ModelsCharacterEnabledtask } from './models-character-enabledtask';
import { ModelsCharacterInspectMessage } from './models-character-inspect-message';
import { ModelsCharacterItemRecast } from './models-character-item-recast';
import { ModelsCharacterLanguage } from './models-character-language';
import { ModelsCharacterLeadershipAbility } from './models-character-leadership-ability';
import { ModelsCharacterMaterial } from './models-character-material';
import { ModelsCharacterMemmedSpell } from './models-character-memmed-spell';
import { ModelsCharacterPetBuff } from './models-character-pet-buff';
import { ModelsCharacterPetInfo } from './models-character-pet-info';
import { ModelsCharacterPetInventory } from './models-character-pet-inventory';
import { ModelsCharacterPotionbelt } from './models-character-potionbelt';
import { ModelsCharacterSkill } from './models-character-skill';
import { ModelsCharacterSpell } from './models-character-spell';
import { ModelsCharacterTask } from './models-character-task';
import { ModelsCharacterTribute } from './models-character-tribute';
import { ModelsCompletedTask } from './models-completed-task';
import { ModelsDataBucket } from './models-data-bucket';
import { ModelsFactionValue } from './models-faction-value';
import { ModelsFriend } from './models-friend';
import { ModelsGuild } from './models-guild';
import { ModelsGuildMember } from './models-guild-member';
import { ModelsInstanceListPlayer } from './models-instance-list-player';
import { ModelsInventory } from './models-inventory';
import { ModelsKeyring } from './models-keyring';
import { ModelsMail } from './models-mail';
import { ModelsPlayerTitleset } from './models-player-titleset';
import { ModelsQuestGlobal } from './models-quest-global';
import { ModelsTimer } from './models-timer';
import { ModelsTitle } from './models-title';
import { ModelsTrader } from './models-trader';
import { ModelsZoneFlag } from './models-zone-flag';
export interface ModelsCharacterDatum {
    aa_exp?: number;
    aa_points?: number;
    aa_points_old?: number;
    aa_points_spent?: number;
    aa_points_spent_old?: number;
    ability_number?: number;
    ability_time_hours?: number;
    ability_time_minutes?: number;
    ability_time_seconds?: number;
    ability_up?: number;
    account_id?: number;
    adventure_stats?: Array<ModelsAdventureStat>;
    agi?: number;
    air_remaining?: number;
    anon?: number;
    autosplit_enabled?: number;
    beard?: number;
    beard_color?: number;
    birthday?: number;
    buyers?: Array<ModelsBuyer>;
    career_tribute_points?: number;
    cha?: number;
    char_recipe_lists?: Array<ModelsCharRecipeList>;
    character_activities?: Array<ModelsCharacterActivity>;
    character_alt_currencies?: Array<ModelsCharacterAltCurrency>;
    character_alternate_abilities?: Array<ModelsCharacterAlternateAbility>;
    character_auras?: Array<ModelsCharacterAura>;
    character_bandoliers?: Array<ModelsCharacterBandolier>;
    character_binds?: Array<ModelsCharacterBind>;
    character_buffs?: Array<ModelsCharacterBuff>;
    character_corpses?: Array<ModelsCharacterCorpse>;
    character_currencies?: Array<ModelsCharacterCurrency>;
    character_disciplines?: Array<ModelsCharacterDiscipline>;
    character_enabledtasks?: Array<ModelsCharacterEnabledtask>;
    character_inspect_messages?: Array<ModelsCharacterInspectMessage>;
    character_item_recasts?: Array<ModelsCharacterItemRecast>;
    character_languages?: Array<ModelsCharacterLanguage>;
    character_leadership_abilities?: Array<ModelsCharacterLeadershipAbility>;
    character_materials?: Array<ModelsCharacterMaterial>;
    character_memmed_spells?: Array<ModelsCharacterMemmedSpell>;
    character_pet_buffs?: Array<ModelsCharacterPetBuff>;
    character_pet_infos?: Array<ModelsCharacterPetInfo>;
    character_pet_inventories?: Array<ModelsCharacterPetInventory>;
    character_potionbelts?: Array<ModelsCharacterPotionbelt>;
    character_skills?: Array<ModelsCharacterSkill>;
    character_spells?: Array<ModelsCharacterSpell>;
    character_tasks?: Array<ModelsCharacterTask>;
    character_tributes?: Array<ModelsCharacterTribute>;
    _class?: number;
    completed_tasks?: Array<ModelsCompletedTask>;
    cur_hp?: number;
    data_buckets?: Array<ModelsDataBucket>;
    deity?: number;
    deleted_at?: string;
    dex?: number;
    drakkin_details?: number;
    drakkin_heritage?: number;
    drakkin_tattoo?: number;
    e_aa_effects?: number;
    e_expended_aa_spent?: number;
    e_last_invsnapshot?: number;
    e_percent_to_aa?: number;
    endurance?: number;
    exp?: number;
    exp_enabled?: number;
    eye_color_1?: number;
    eye_color_2?: number;
    face?: number;
    faction_values?: Array<ModelsFactionValue>;
    firstlogon?: number;
    friends?: Array<ModelsFriend>;
    gender?: number;
    gm?: number;
    group_auto_consent?: number;
    group_leadership_exp?: number;
    group_leadership_points?: number;
    guild?: ModelsGuild;
    guild_auto_consent?: number;
    guild_members?: Array<ModelsGuildMember>;
    hair_color?: number;
    hair_style?: number;
    heading?: number;
    hunger_level?: number;
    id?: number;
    instance_list_players?: Array<ModelsInstanceListPlayer>;
    _int?: number;
    intoxication?: number;
    inventories?: Array<ModelsInventory>;
    keyrings?: Array<ModelsKeyring>;
    last_login?: number;
    last_name?: string;
    ldon_points_available?: number;
    ldon_points_guk?: number;
    ldon_points_mir?: number;
    ldon_points_mmc?: number;
    ldon_points_ruj?: number;
    ldon_points_tak?: number;
    leadership_exp_on?: number;
    level?: number;
    level_2?: number;
    lfg?: number;
    lfp?: number;
    mail?: Array<ModelsMail>;
    mailkey?: string;
    mana?: number;
    name?: string;
    player_titlesets?: Array<ModelsPlayerTitleset>;
    points?: number;
    pvp_2?: number;
    pvp_best_kill_streak?: number;
    pvp_career_points?: number;
    pvp_current_kill_streak?: number;
    pvp_current_points?: number;
    pvp_deaths?: number;
    pvp_kills?: number;
    pvp_status?: number;
    pvp_type?: number;
    pvp_worst_death_streak?: number;
    quest_globals?: Array<ModelsQuestGlobal>;
    race?: number;
    raid_auto_consent?: number;
    raid_leadership_exp?: number;
    raid_leadership_points?: number;
    rest_timer?: number;
    show_helm?: number;
    sta?: number;
    str?: number;
    suffix?: string;
    thirst_level?: number;
    time_played?: number;
    timers?: Array<ModelsTimer>;
    title?: string;
    titles?: Array<ModelsTitle>;
    toxicity?: number;
    traders?: Array<ModelsTrader>;
    tribute_active?: number;
    tribute_points?: number;
    tribute_time_remaining?: number;
    wis?: number;
    x?: number;
    xtargets?: number;
    y?: number;
    z?: number;
    zone_change_count?: number;
    zone_flags?: Array<ModelsZoneFlag>;
    zone_id?: number;
    zone_instance?: number;
}
