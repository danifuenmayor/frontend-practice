import {
  sendRegister,
  sendRegisterSuccess,
  sendRegisterFail,
} from "../../reducers/user/actions";
import {
  SEND_REGISTER,
  SEND_REGISTER_SUCCESS,
  SEND_REGISTER_FAIL,
} from "../../reducers/user/types";

//Watchout here with the Payload types defined
describe("testing register actions", () => {
  const testRegister = {
    email: "some@email.com",
    password: "somePassword",
    name: "someName",
    lastName: "someNameSon",
  };
  test("should return login action", () => {
    const expectedAction = {
      type: SEND_REGISTER,
      payload: testRegister,
    };
    expect(sendRegister(testRegister)).toEqual(expectedAction);
  });
  test("should return success login action", () => {
    const expectedAction = {
      type: SEND_REGISTER_SUCCESS,
      payload: testRegister,
    };
    expect(sendRegisterSuccess(testRegister)).toEqual(expectedAction);
  });
  test("should return fail login action", () => {
    const expectedAction = {
      type: SEND_REGISTER_FAIL,
      payload: "someError",
    };
    expect(sendRegisterFail("someError")).toEqual(expectedAction);
  });
});
