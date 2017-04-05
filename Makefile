
run:
	react-native run-ios

# put "export REACT_NATIVE_DEVICE=<Your Phone or Tablet's Name>" in your shell config
run-dev:
	react-native run-ios --device $(REACT_NATIVE_DEVICE)

flow:
	 npm run-script flow

test:
	npm run test

APPNAME=defunddapl

push-stage:
	code-push release-react $(APPNAME) ios -d Staging

push-promote:
	code-push promote $(APPNAME) Staging Production --description "New features and bugfixes"

push-release:
	code-push release-react $(APPNAME) ios -d Production

push-rollout-20:
	code-push promote $(APPNAME) Staging Production -r 20%
	# If no complaints from 20% of users, push-rollout-100 to push to all

push-rollout-100:
	code-push promote $(APPNAME) Staging Production -r 100%

push-stats:
	code-push deployment ls $(APPNAME) # add -k to get keys

console:
	react-native log-ios
	# react-native log-android
