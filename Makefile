
run:
	react-native run-ios

# put "export REACT_NATIVE_DEVICE=<Your Phone or Tablet's Name>" in your shell config
run-dev:
	react-native run-ios --device $(REACT_NATIVE_DEVICE)

flow:
	 npm run-script flow

test:
	npm run test

console:
	react-native log-ios
	# react-native log-android
