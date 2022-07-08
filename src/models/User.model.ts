enum Role {
  ADMIN,
  USER,
}
enum StringEnum {
  FOO = "foo",
  BAR = "bar",
}
class Address {
  street: string;
}
class Profile {
  bio: string;
  age: string;
  date: Date;
  num: number;
  role: Role;
  roles: Role[];
  maybeRole?: Role;
  maybeRoles?: Role[];
  nullableRole: Role | null;
  stringEnum: StringEnum;
  stringEnums: StringEnum[];
  maybeStringEnum?: StringEnum;
  maybeStringEnums?: StringEnum[];
  nullableStringEnum: StringEnum | null;
}
export class User {
  firstName: string;
  lastName: string;
  profile: Profile;
  addresses: Address[];
  otherAddresses: Array<Address>;
  flag: boolean;
  foo: any;
  nullable: string | null;
  primitives: string[];
  nullableType: Address | null;
  maybePrimitives?: string[];
  nullablePrimitives: string[] | null;
  maybeType?: Address;
  /**
   * @autoMapIgnore
   */
  ignoreMe: string;
}
