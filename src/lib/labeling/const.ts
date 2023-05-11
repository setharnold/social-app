import {LabelPreferencesModel} from 'state/models/ui/preferences'
import {LabelValGroup} from './types'

export const ILLEGAL_LABEL_GROUP: LabelValGroup = {
  id: 'illegal',
  title: 'Illegal Content',
  warning: 'Illegal Content',
  values: ['csam', 'dmca-violation', 'nudity-nonconsensual'],
}

export const ALWAYS_FILTER_LABEL_GROUP: LabelValGroup = {
  id: 'always-filter',
  title: 'Content Warning',
  warning: 'Content Warning',
  values: ['!filter'],
}

export const ALWAYS_WARN_LABEL_GROUP: LabelValGroup = {
  id: 'always-warn',
  title: 'Content Warning',
  warning: 'Content Warning',
  values: ['!warn', 'account-security'],
}

export const UNKNOWN_LABEL_GROUP: LabelValGroup = {
  id: 'unknown',
  title: 'Unknown Label',
  warning: 'Content Warning',
  values: [],
}

export const CONFIGURABLE_LABEL_GROUPS: Record<
  keyof LabelPreferencesModel,
  LabelValGroup
> = {
  nsfw: {
    id: 'nsfw',
    title: 'Explicit Sexual Images',
    subtitle: 'i.e. Pornography',
    warning: 'Sexually Explicit',
    values: ['porn', 'nsfl'],
    isAdultImagery: true,
  },
  nudity: {
    id: 'nudity',
    title: 'Other Nudity',
    subtitle: 'Including non-sexual and artistic',
    warning: 'Nudity',
    values: ['nudity'],
    isAdultImagery: true,
  },
  suggestive: {
    id: 'suggestive',
    title: 'Sexually Suggestive',
    subtitle: 'Does not include nudity',
    warning: 'Sexually Suggestive',
    values: ['sexual'],
    isAdultImagery: true,
  },
  gore: {
    id: 'gore',
    title: 'Violent / Bloody',
    subtitle: 'Gore, self-harm, torture',
    warning: 'Violence',
    values: ['gore', 'self-harm', 'torture', 'nsfl'],
    isAdultImagery: true,
  },
  hate: {
    id: 'hate',
    title: 'Political Violence',
    subtitle: 'Terrorist, hate, supremacist groups',
    warning: 'Policital Violence',
    values: ['icon-kkk', 'icon-nazi', 'icon-intolerant', 'intolerant-group'],
  },
  spam: {
    id: 'spam',
    title: 'Spam',
    subtitle: 'Excessive unwanted interactions',
    warning: 'Spam',
    values: ['spam'],
  },
  impersonation: {
    id: 'impersonation',
    title: 'Impersonation',
    subtitle: 'Accounts falsely claiming to be people or orgs',
    warning: 'Impersonation',
    values: ['impersonation'],
  },
  antisocial: {
    id: 'antisocial',
    title: 'Anti-Social Behavior',
    subtitle: 'Harassment, trolling, intolerant behavior',
    warning: 'Anti-Social',
    values: ['troll', 'threat', 'intolerant', 'misleading', 'scam'],
  },
}
