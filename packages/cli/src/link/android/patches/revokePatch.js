/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import fs from 'fs';

module.exports = function revokePatch(file, patch) {
  fs.writeFileSync(
    file,
    fs.readFileSync(file, 'utf8').replace(patch.patch, '')
  );
};
