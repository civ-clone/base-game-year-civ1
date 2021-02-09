import { instance as ruleRegistryInstance } from '@civ-clone/core-rule/RuleRegistry';
import turnYear from './Rules/Turn/year';

ruleRegistryInstance.register(...turnYear());
