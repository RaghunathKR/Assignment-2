# SENG8120 Modern Automated Testing 

## Purpose

This repository houses the code we require for examples and assignments.

## Repository Usage

This repository will contain branches of code.

Please refer to your instructor's directions on how to use this repository.

## Branch Usage

**Installing The Dependencies**

You will need to install dependencies by using:

```bash
npm install
```

**Running The Project**

To run the project, you must first build the project:

```bash
npm run build
```

followed by:

```bash
npm start
```

Note:  if you make a change in the production code, you must `build` & `start`.
Otherwise, your changes will not be reflected.

**Running The Tests**

To run the tests, you can use

```bash
npm run test
```

To keep the tests running, you can use

```bash
npm run test -- --watch
```

To run a specific test, you can use

```bash
npm run test [my test name]
```

## ✅ Test Coverage Overview

This section outlines which test cases are currently implemented and which are planned (but not yet enabled) for the `paintRequiredCalculator` module.

### ✅ Implemented Test Cases
- ✔️ Calculates result for valid inputs (50, 10)
- ✔️ Handles division by zero (coveragePerLiter = 0)
- ✔️ Handles negative area
- ✔️ Handles decimal inputs
- ✔️ Handles very small coverage values

### ❌ Unimplemented Test Cases
- ❌ Handles negative coveragePerLiter
- ❌ Handles both inputs being negative
- ❌ Handles floating-point result (non-integer output)
- ❌ Handles very large coverage value (small result)
- ❌ Handles area = 0
## ✅ Test Coverage Overview (continued)

### `calculateCanvasSize`

#### ✅ Implemented Test Cases
- ✔️ Returns correct area for valid string inputs
- ✔️ Returns `0` when one dimension is zero
- ✔️ Returns `NaN` for empty strings
- ✔️ Returns `NaN` for `"null"` as input
- ✔️ Handles decimal strings (truncates with `parseInt`)
- ✔️ Handles both inputs as negative numbers
- ✔️ Handles one negative, one positive value

#### ❌ Unimplemented Test Cases
- ❌ Returns `0` when both dimensions are zero
- ❌ Trims spaces in string inputs (e.g. `" 10 "` should parse as `10`)
- ❌ Returns `NaN` for fully non-numeric strings
- ❌ Handles very large values
