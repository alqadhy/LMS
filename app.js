/* ============================================================
   نظام إدارة المكتبة — JavaScript كامل نهائي (مع i18n)
   ============================================================ */

/* ================== i18n Dictionary ================== */
const I18N = {
  ar: {
    loginTitle: "نظام إدارة المكتبة",
    loginSub: "سجّل الدخول للمتابعة",
    labelUser: "اسم المستخدم",
    labelPass: "كلمة المرور",
    loginBtn: "تسجيل الدخول",
    loginHintTitle: "حسابات جاهزة:",
    hintAdmin: "مدير:",
    hintLib: "أمين:",
    hintView: "مشاهد:",
    loginErr: "اسم المستخدم أو كلمة المرور غير صحيحة",
    dashboard: "لوحة التحكم",
    books: "الكتب",
    members: "الأعضاء",
    borrow: "الاستعارة",
    returns: "الإرجاعات",
    categories: "التصنيفات",
    reports: "التقارير",
    users: "المستخدمون",
    settings: "الإعدادات",
    logout: "خروج",
    admin: "مدير",
    librarian: "أمين مكتبة",
    viewer: "مشاهد",
    totalBooks: "إجمالي الكتب",
    availableCopies: "نسخ متاحة",
    borrowedBooks: "كتب مستعارة",
    membersCount: "أعضاء",
    overdueBooks: "كتب متأخرة",
    todayBorrows: "استعارات اليوم",
    movementChart: "📊 حركة الاستعارة والإرجاع (7 أيام)",
    overdueTitle: "⚠️ كتب متأخرة",
    lastActivity: "🕒 آخر العمليات",
    noOverdue: "لا توجد كتب متأخرة",
    noActivity: "لا توجد عمليات بعد",
    borrowsLegend: "استعارات",
    returnsLegend: "إرجاعات",
    booksList: "📚 قائمة الكتب",
    searchBooks: "بحث بالاسم أو المؤلف أو ISBN...",
    addBook: "➕ إضافة كتاب",
    title: "العنوان",
    author: "المؤلف",
    category: "التصنيف",
    copies: "النسخ",
    available: "المتاح",
    location: "الموقع",
    actions: "إجراءات",
    view: "عرض",
    edit: "تعديل",
    delete: "حذف",
    noBooks: "لا توجد كتب",
    bookTitle: "اسم الكتاب",
    publisher: "دار النشر",
    publishDate: "تاريخ النشر",
    copiesCount: "عدد النسخ",
    description: "وصف مختصر",
    save: "حفظ",
    cancel: "إلغاء",
    addBookTitle: "إضافة كتاب جديد",
    editBookTitle: "تعديل كتاب",
    requiredFields: "يرجى ملء الحقول المطلوبة",
    bookAdded: "تم إضافة الكتاب",
    bookUpdated: "تم تعديل الكتاب",
    bookDeleted: "تم الحذف",
    confirmDeleteBook: "حذف هذا الكتاب؟",
    membersList: "👥 قائمة الأعضاء",
    searchMembers: "بحث بالاسم أو الهاتف...",
    addMember: "➕ إضافة عضو",
    phone: "الهاتف",
    email: "البريد",
    address: "العنوان",
    joinDate: "تاريخ الاشتراك",
    status: "الحالة",
    fullName: "الاسم الكامل",
    active: "نشط",
    inactive: "موقوف",
    noMembers: "لا يوجد أعضاء",
    addMemberTitle: "إضافة عضو",
    editMemberTitle: "تعديل عضو",
    memberAdded: "تم الإضافة",
    memberUpdated: "تم التعديل",
    confirmDeleteMember: "حذف هذا العضو؟",
    borrowNew: "🔄 استعارة كتاب جديد",
    member: "العضو",
    book: "الكتاب",
    expectedReturn: "تاريخ الإرجاع المتوقع",
    registerBorrow: "✅ تسجيل الاستعارة",
    activeBorrows: "📋 عمليات الاستعارة النشطة",
    borrowDate: "تاريخ الاستعارة",
    onTime: "في الموعد",
    late: "متأخر",
    returnBtn: "↩️ إرجاع",
    noActiveBorrows: "لا توجد استعارات نشطة",
    selectMember: "-- اختر العضو --",
    selectBook: "-- اختر الكتاب --",
    availableWord: "متاح",
    confirmReturn: "تأكيد إرجاع الكتاب؟",
    returnSuccess: "تم الإرجاع بنجاح",
    returnWithFine: "تم الإرجاع — غرامة",
    borrowSuccess: "تم تسجيل الاستعارة",
    fillFields: "يرجى ملء الحقول",
    returnsLog: "↩️ سجل الاستعارات والإرجاعات",
    returnDate: "تاريخ الإرجاع",
    lateDays: "التأخير",
    fine: "الغرامة",
    returned: "مُرجع",
    activeStatus: "نشط",
    noRecords: "لا توجد سجلات",
    categoriesList: "🏷️ التصنيفات",
    addCategory: "➕ إضافة تصنيف",
    catName: "اسم التصنيف",
    booksCount: "عدد الكتب",
    noCategories: "لا توجد تصنيفات",
    addCatTitle: "إضافة تصنيف",
    editCatTitle: "تعديل تصنيف",
    confirmDeleteCat: "حذف هذا التصنيف؟",
    enterCatName: "أدخل اسم التصنيف",
    saved: "تم الحفظ",
    reportsTitle: "📈 التقارير",
    fromDate: "من تاريخ",
    toDate: "إلى تاريخ",
    allBooksReport: "📚 جميع الكتب",
    borrowedReport: "📖 الكتب المستعارة",
    availableReport: "✅ الكتب المتاحة",
    overdueReport: "⏰ الكتب المتأخرة",
    topBooksReport: "🏆 أكثر الكتب استعارة",
    topMembersReport: "🥇 أكثر الأعضاء استعارة",
    movementReport: "🔄 حركة الاستعارة",
    reportResult: "نتيجة التقرير",
    print: "🖨️ طباعة / PDF",
    noData: "لا توجد بيانات",
    timesBorrowed: "مرات الاستعارة",
    usersList: "🔐 المستخدمون",
    addUser: "➕ مستخدم جديد",
    usernameCol: "اسم المستخدم",
    role: "الصلاحية",
    newPassword: "كلمة المرور (اتركها فارغة للإبقاء)",
    addUserTitle: "مستخدم جديد",
    editUserTitle: "تعديل مستخدم",
    confirmDeleteUser: "حذف هذا المستخدم؟",
    passwordRequired: "كلمة المرور مطلوبة",
    notAuthorized: "غير مصرح",
    settingsTitle: "⚙️ إعدادات النظام",
    libraryName: "اسم المكتبة",
    finePerDay: "الغرامة اليومية (جنيه)",
    borrowDays: "مدة الاستعارة (يوم)",
    maxBorrows: "الحد الأقصى للاستعارات لكل عضو",
    saveSettings: "💾 حفظ الإعدادات",
    dangerZone: "🗑️ منطقة الخطر",
    resetAll: "مسح جميع البيانات وإعادة التهيئة",
    settingsSaved: "تم حفظ الإعدادات",
    confirmReset1: "سيتم مسح جميع البيانات نهائياً. متأكد؟",
    confirmReset2: "تأكيد أخير: مسح كل شيء؟",
    noNotifications: "لا توجد إشعارات",
    overdueBooksTitle: "⚠️ الكتب المتأخرة",
    lateBy: "متأخر",
    changeLang: "تغيير اللغة",
  },
  en: {
    loginTitle: "Library Management System",
    loginSub: "Sign in to continue",
    labelUser: "Username",
    labelPass: "Password",
    loginBtn: "Login",
    loginHintTitle: "Demo accounts:",
    hintAdmin: "Admin:",
    hintLib: "Librarian:",
    hintView: "Viewer:",
    loginErr: "Invalid username or password",
    dashboard: "Dashboard",
    books: "Books",
    members: "Members",
    borrow: "Borrow",
    returns: "Returns",
    categories: "Categories",
    reports: "Reports",
    users: "Users",
    settings: "Settings",
    logout: "Logout",
    admin: "Admin",
    librarian: "Librarian",
    viewer: "Viewer",
    totalBooks: "Total Books",
    availableCopies: "Available Copies",
    borrowedBooks: "Borrowed Books",
    membersCount: "Members",
    overdueBooks: "Overdue Books",
    todayBorrows: "Today's Borrows",
    movementChart: "📊 Borrow & Return Activity (7 days)",
    overdueTitle: "⚠️ Overdue Books",
    lastActivity: "🕒 Recent Activity",
    noOverdue: "No overdue books",
    noActivity: "No activity yet",
    borrowsLegend: "Borrows",
    returnsLegend: "Returns",
    booksList: "📚 Books List",
    searchBooks: "Search by title, author or ISBN...",
    addBook: "➕ Add Book",
    title: "Title",
    author: "Author",
    category: "Category",
    copies: "Copies",
    available: "Available",
    location: "Location",
    actions: "Actions",
    view: "View",
    edit: "Edit",
    delete: "Delete",
    noBooks: "No books found",
    bookTitle: "Book Title",
    publisher: "Publisher",
    publishDate: "Publish Date",
    copiesCount: "Copies Count",
    description: "Description",
    save: "Save",
    cancel: "Cancel",
    addBookTitle: "Add New Book",
    editBookTitle: "Edit Book",
    requiredFields: "Please fill required fields",
    bookAdded: "Book added successfully",
    bookUpdated: "Book updated",
    bookDeleted: "Deleted successfully",
    confirmDeleteBook: "Delete this book?",
    membersList: "👥 Members List",
    searchMembers: "Search by name or phone...",
    addMember: "➕ Add Member",
    phone: "Phone",
    email: "Email",
    address: "Address",
    joinDate: "Join Date",
    status: "Status",
    fullName: "Full Name",
    active: "Active",
    inactive: "Inactive",
    noMembers: "No members found",
    addMemberTitle: "Add Member",
    editMemberTitle: "Edit Member",
    memberAdded: "Member added",
    memberUpdated: "Member updated",
    confirmDeleteMember: "Delete this member?",
    borrowNew: "🔄 New Borrow",
    member: "Member",
    book: "Book",
    expectedReturn: "Expected Return Date",
    registerBorrow: "✅ Register Borrow",
    activeBorrows: "📋 Active Borrows",
    borrowDate: "Borrow Date",
    onTime: "On Time",
    late: "Late",
    returnBtn: "↩️ Return",
    noActiveBorrows: "No active borrows",
    selectMember: "-- Select Member --",
    selectBook: "-- Select Book --",
    availableWord: "available",
    confirmReturn: "Confirm book return?",
    returnSuccess: "Returned successfully",
    returnWithFine: "Returned — Fine",
    borrowSuccess: "Borrow registered",
    fillFields: "Please fill all fields",
    returnsLog: "↩️ Borrow & Return History",
    returnDate: "Return Date",
    lateDays: "Late Days",
    fine: "Fine",
    returned: "Returned",
    activeStatus: "Active",
    noRecords: "No records found",
    categoriesList: "🏷️ Categories",
    addCategory: "➕ Add Category",
    catName: "Category Name",
    booksCount: "Books Count",
    noCategories: "No categories",
    addCatTitle: "Add Category",
    editCatTitle: "Edit Category",
    confirmDeleteCat: "Delete this category?",
    enterCatName: "Enter category name",
    saved: "Saved",
    reportsTitle: "📈 Reports",
    fromDate: "From Date",
    toDate: "To Date",
    allBooksReport: "📚 All Books",
    borrowedReport: "📖 Borrowed Books",
    availableReport: "✅ Available Books",
    overdueReport: "⏰ Overdue Books",
    topBooksReport: "🏆 Most Borrowed Books",
    topMembersReport: "🥇 Top Members",
    movementReport: "🔄 Movement",
    reportResult: "Report Result",
    print: "🖨️ Print / PDF",
    noData: "No data",
    timesBorrowed: "Times Borrowed",
    usersList: "🔐 Users",
    addUser: "➕ New User",
    usernameCol: "Username",
    role: "Role",
    newPassword: "Password (leave empty to keep)",
    addUserTitle: "New User",
    editUserTitle: "Edit User",
    confirmDeleteUser: "Delete this user?",
    passwordRequired: "Password required",
    notAuthorized: "Not authorized",
    settingsTitle: "⚙️ System Settings",
    libraryName: "Library Name",
    finePerDay: "Daily Fine (EGP)",
    borrowDays: "Borrow Days",
    maxBorrows: "Max Borrows Per Member",
    saveSettings: "💾 Save Settings",
    dangerZone: "🗑️ Danger Zone",
    resetAll: "Reset All Data",
    settingsSaved: "Settings saved",
    confirmReset1: "All data will be permanently deleted. Are you sure?",
    confirmReset2: "Final confirmation: delete everything?",
    noNotifications: "No notifications",
    overdueBooksTitle: "⚠️ Overdue Books",
    lateBy: "Late by",
    changeLang: "Change Language",
  },
};

let currentLang = localStorage.getItem("lang") || "ar";
const t = (k) => (I18N[currentLang] && I18N[currentLang][k]) || k;

function toggleLang() {
  currentLang = currentLang === "ar" ? "en" : "ar";
  localStorage.setItem("lang", currentLang);
  applyLang();
  if (curUser()) navigate(currentPage);
}

function applyLang() {
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
  document.body.dir = currentLang === "ar" ? "rtl" : "ltr";
  const lbl = document.getElementById("langLabel");
  const lblL = document.getElementById("langLabelLogin");
  if (lbl) lbl.textContent = currentLang === "ar" ? "EN" : "ع";
  if (lblL) lblL.textContent = currentLang === "ar" ? "EN" : "ع";

  const $id = (id) => document.getElementById(id);
  if ($id("loginTitle")) $id("loginTitle").textContent = t("loginTitle");
  if ($id("loginSub")) $id("loginSub").textContent = t("loginSub");
  if ($id("labelUser")) $id("labelUser").textContent = t("labelUser");
  if ($id("labelPass")) $id("labelPass").textContent = t("labelPass");
  if ($id("loginBtn")) $id("loginBtn").textContent = t("loginBtn");
  if ($id("loginHintTitle"))
    $id("loginHintTitle").textContent = t("loginHintTitle");
  if ($id("hintAdmin")) $id("hintAdmin").textContent = t("hintAdmin");
  if ($id("hintLib")) $id("hintLib").textContent = t("hintLib");
  if ($id("hintView")) $id("hintView").textContent = t("hintView");
  if ($id("logoutBtn")) $id("logoutBtn").textContent = t("logout");
}

/* ================== DB ================== */
const DB = {
  init() {
    if (!localStorage.users)
      localStorage.users = JSON.stringify([
        {
          id: 1,
          username: "admin",
          password: "admin123",
          name: "مدير النظام",
          role: "admin",
        },
        {
          id: 2,
          username: "librarian",
          password: "lib123",
          name: "أمين المكتبة",
          role: "librarian",
        },
        {
          id: 3,
          username: "viewer",
          password: "view123",
          name: "مشاهد",
          role: "viewer",
        },
      ]);
    if (!localStorage.settings)
      localStorage.settings = JSON.stringify({
        libraryName: "مكتبة النور",
        finePerDay: 5,
        maxDays: 14,
        maxBorrows: 3,
      });
    if (!localStorage.categories)
      localStorage.categories = JSON.stringify([
        { id: 1, name: "الروايات" },
        { id: 2, name: "العلوم" },
        { id: 3, name: "التاريخ" },
        { id: 4, name: "التكنولوجيا" },
        { id: 5, name: "الأدب" },
        { id: 6, name: "الدين" },
        { id: 7, name: "التنمية البشرية" },
      ]);
    ["books", "members", "borrows", "activities"].forEach((k) => {
      if (!localStorage[k]) localStorage[k] = "[]";
    });
  },
  get(k) {
    return JSON.parse(localStorage[k] || "[]");
  },
  set(k, v) {
    localStorage[k] = JSON.stringify(v);
  },
  nextId(k) {
    const a = this.get(k);
    return a.length ? Math.max(...a.map((x) => x.id)) + 1 : 1;
  },
  settings() {
    return JSON.parse(localStorage.settings);
  },
  saveSettings(s) {
    localStorage.settings = JSON.stringify(s);
  },
  books() {
    return this.get("books");
  },
  book(id) {
    return this.books().find((b) => b.id == id);
  },
  addBook(b) {
    b.id = this.nextId("books");
    b.available = +b.copies;
    const a = this.books();
    a.push(b);
    this.set("books", a);
    this.log(`إضافة كتاب "${b.title}"`);
    return b;
  },
  updateBook(id, d) {
    const a = this.books();
    const i = a.findIndex((b) => b.id == id);
    if (i > -1) {
      const br = a[i].copies - a[i].available;
      a[i] = { ...a[i], ...d, available: Math.max(0, +d.copies - br) };
      this.set("books", a);
      this.log(`تعديل "${a[i].title}"`);
    }
  },
  deleteBook(id) {
    if (this.borrows().some((b) => b.bookId == id && !b.returned))
      return { error: "لا يمكن حذف كتاب لديه استعارة نشطة" };
    this.set(
      "books",
      this.books().filter((b) => b.id != id),
    );
    this.log(`حذف كتاب #${id}`);
    return { ok: 1 };
  },
  members() {
    return this.get("members");
  },
  member(id) {
    return this.members().find((m) => m.id == id);
  },
  addMember(m) {
    m.id = this.nextId("members");
    m.joinDate = new Date().toISOString().split("T")[0];
    m.status = "active";
    const a = this.members();
    a.push(m);
    this.set("members", a);
    this.log(`إضافة عضو "${m.name}"`);
    return m;
  },
  updateMember(id, d) {
    const a = this.members();
    const i = a.findIndex((m) => m.id == id);
    if (i > -1) {
      a[i] = { ...a[i], ...d };
      this.set("members", a);
    }
  },
  deleteMember(id) {
    if (this.borrows().some((b) => b.memberId == id && !b.returned))
      return { error: "لا يمكن حذف عضو لديه استعارات نشطة" };
    this.set(
      "members",
      this.members().filter((m) => m.id != id),
    );
    return { ok: 1 };
  },
  cats() {
    return this.get("categories");
  },
  cat(id) {
    return this.cats().find((c) => c.id == id);
  },
  addCat(name) {
    const a = this.cats();
    a.push({ id: this.nextId("categories"), name });
    this.set("categories", a);
  },
  updateCat(id, name) {
    const a = this.cats();
    const i = a.findIndex((c) => c.id == id);
    if (i > -1) {
      a[i].name = name;
      this.set("categories", a);
    }
  },
  deleteCat(id) {
    if (this.books().some((b) => b.categoryId == id))
      return { error: "لا يمكن حذف تصنيف يحتوي كتب" };
    this.set(
      "categories",
      this.cats().filter((c) => c.id != id),
    );
    return { ok: 1 };
  },
  borrows() {
    return this.get("borrows");
  },
  borrow(mid, bid, exp) {
    const book = this.book(bid);
    if (!book || book.available <= 0) return { error: "الكتاب غير متاح" };
    const m = this.member(mid);
    if (!m || m.status !== "active") return { error: "العضو غير نشط" };
    const s = this.settings();
    if (
      this.borrows().filter((b) => b.memberId == mid && !b.returned).length >=
      s.maxBorrows
    )
      return { error: `تجاوزت الحد (${s.maxBorrows} كتب)` };
    const a = this.borrows();
    const br = {
      id: this.nextId("borrows"),
      memberId: +mid,
      bookId: +bid,
      borrowDate: new Date().toISOString().split("T")[0],
      expectedDate: exp,
      returned: false,
      returnDate: null,
      fine: 0,
      lateDays: 0,
    };
    a.push(br);
    this.set("borrows", a);
    const bs = this.books();
    const i = bs.findIndex((x) => x.id == bid);
    bs[i].available--;
    this.set("books", bs);
    this.log(`استعارة "${book.title}" ← "${m.name}"`);
    return { ok: 1, borrow: br };
  },
  returnBook(id) {
    const a = this.borrows();
    const i = a.findIndex((b) => b.id == id);
    if (i === -1) return { error: "غير موجود" };
    if (a[i].returned) return { error: "تم الإرجاع مسبقاً" };
    const br = a[i];
    br.returned = true;
    br.returnDate = new Date().toISOString().split("T")[0];
    const late = Math.max(
      0,
      Math.floor((new Date() - new Date(br.expectedDate)) / 864e5),
    );
    br.lateDays = late;
    br.fine = late * this.settings().finePerDay;
    this.set("borrows", a);
    const bs = this.books();
    const j = bs.findIndex((x) => x.id == br.bookId);
    if (j > -1) {
      bs[j].available++;
      this.set("books", bs);
    }
    const bk = this.book(br.bookId),
      m = this.member(br.memberId);
    this.log(
      `إرجاع "${bk?.title}" من "${m?.name}"${late > 0 ? ` (غرامة ${br.fine}ج)` : ""}`,
    );
    return { ok: 1, borrow: br };
  },
  log(action) {
    const a = this.get("activities");
    a.unshift({ id: Date.now(), action, time: new Date().toISOString() });
    this.set("activities", a.slice(0, 60));
  },
  activities() {
    return this.get("activities");
  },
  stats() {
    const books = this.books(),
      members = this.members(),
      borrows = this.borrows();
    const today = new Date().toISOString().split("T")[0];
    const totalCopies = books.reduce((s, b) => s + (+b.copies || 0), 0);
    const available = books.reduce((s, b) => s + (+b.available || 0), 0);
    const active = borrows.filter((b) => !b.returned);
    return {
      totalBooks: books.length,
      totalCopies,
      available,
      borrowed: totalCopies - available,
      members: members.length,
      overdue: active.filter((b) => new Date(b.expectedDate) < new Date())
        .length,
      todayBorrows: borrows.filter((b) => b.borrowDate === today).length,
    };
  },
};

/* ================== Helpers ================== */
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const curUser = () => JSON.parse(sessionStorage.user || "null");
const canEdit = () => curUser() && curUser().role !== "viewer";
const isAdmin = () => curUser() && curUser().role === "admin";
const fmtDate = (d) =>
  d
    ? new Date(d).toLocaleDateString(currentLang === "ar" ? "ar-EG" : "en-US")
    : "—";

function toast(msg, type = "success") {
  const el = document.createElement("div");
  el.className = "toast " + type;
  el.textContent = msg;
  $("#toastRoot").appendChild(el);
  setTimeout(() => el.remove(), 3000);
}
function openModal(html) {
  $("#modalRoot").innerHTML =
    `<div class="modal-overlay" onclick="if(event.target===this)closeModal()"><div class="modal">${html}</div></div>`;
}
function closeModal() {
  $("#modalRoot").innerHTML = "";
}

/* ================== Auth ================== */
function doLogin() {
  const u = $("#loginUser").value.trim(),
    p = $("#loginPass").value;
  const user = DB.get("users").find(
    (x) => x.username === u && x.password === p,
  );
  const err = $("#loginError");
  if (!user) {
    err.textContent = t("loginErr");
    err.style.display = "block";
    return;
  }
  sessionStorage.user = JSON.stringify(user);
  startApp();
}
function doLogout() {
  sessionStorage.removeItem("user");
  location.reload();
}

/* ================== Routing ================== */
const PAGES = [
  { id: "dashboard", ico: "📊", roles: ["admin", "librarian", "viewer"] },
  { id: "books", ico: "📚", roles: ["admin", "librarian", "viewer"] },
  { id: "members", ico: "👥", roles: ["admin", "librarian", "viewer"] },
  { id: "borrow", ico: "🔄", roles: ["admin", "librarian", "viewer"] },
  { id: "returns", ico: "↩️", roles: ["admin", "librarian", "viewer"] },
  { id: "categories", ico: "🏷️", roles: ["admin", "librarian", "viewer"] },
  { id: "reports", ico: "📈", roles: ["admin", "librarian", "viewer"] },
  { id: "users", ico: "🔐", roles: ["admin"] },
  { id: "settings", ico: "⚙️", roles: ["admin"] },
];
let currentPage = "dashboard";

function startApp() {
  const u = curUser();
  if (!u) {
    $("#loginScreen").style.display = "flex";
    $("#appScreen").style.display = "none";
    applyLang();
    return;
  }
  applyLang();
  $("#loginScreen").style.display = "none";
  $("#appScreen").style.display = "flex";
  $("#brandName").textContent = DB.settings().libraryName;
  $("#userName").textContent = u.name;
  $("#userRole").textContent = t(u.role);
  $("#userAvatar").textContent = u.name.charAt(0);
  buildSidebar();
  updateNotif();
  navigate("dashboard");
}

function buildSidebar() {
  const role = curUser().role;
  $("#sidebarNav").innerHTML = PAGES.filter((p) => p.roles.includes(role))
    .map(
      (p) =>
        `<a href="#" data-page="${p.id}" onclick="navigate('${p.id}');return false;"><span class="ico">${p.ico}</span>${t(p.id)}</a>`,
    )
    .join("");
}

function updateNotif() {
  const overdue = DB.borrows().filter(
    (b) => !b.returned && new Date(b.expectedDate) < new Date(),
  ).length;
  const badge = $("#notifBadge");
  if (overdue > 0) {
    badge.textContent = overdue;
    badge.style.display = "flex";
  } else badge.style.display = "none";
}

function showNotifications() {
  const overdue = DB.borrows().filter(
    (b) => !b.returned && new Date(b.expectedDate) < new Date(),
  );
  if (!overdue.length) {
    toast(t("noNotifications"), "success");
    return;
  }
  openModal(`
    <div class="modal-head"><h3>${t("overdueBooksTitle")} (${overdue.length})</h3>
      <button class="modal-close" onclick="closeModal()">&times;</button></div>
    <div class="modal-body">
      ${overdue
        .map((b) => {
          const bk = DB.book(b.bookId),
            m = DB.member(b.memberId);
          const days = Math.floor(
            (new Date() - new Date(b.expectedDate)) / 864e5,
          );
          return `<div style="padding:10px;border-bottom:1px solid #eee">
          <b>${bk?.title || "—"}</b><br>
          <span style="color:#666;font-size:12px">${m?.name || "—"} — ${t("lateBy")} ${days}</span>
        </div>`;
        })
        .join("")}
    </div>`);
}

function navigate(page) {
  const p = PAGES.find((x) => x.id === page);
  if (!p || !p.roles.includes(curUser().role)) return;
  currentPage = page;
  $$(".sidebar-nav a").forEach((a) =>
    a.classList.toggle("active", a.dataset.page === page),
  );
  $("#pageTitle").textContent = t(p.id);
  $("#sidebar").classList.remove("open");
  const routes = {
    dashboard: renderDashboard,
    books: renderBooks,
    members: renderMembers,
    borrow: renderBorrow,
    returns: renderReturns,
    categories: renderCategories,
    reports: renderReports,
    users: renderUsers,
    settings: renderSettings,
  };
  (routes[page] || renderDashboard)();
}

/* ================== Dashboard ================== */
function renderDashboard() {
  const s = DB.stats();
  $("#content").innerHTML = `
    <div class="stats-grid">
      <div class="stat-card"><div class="stat-icon blue">📚</div><div class="stat-info"><h3>${s.totalBooks}</h3><p>${t("totalBooks")}</p></div></div>
      <div class="stat-card"><div class="stat-icon green">✅</div><div class="stat-info"><h3>${s.available}</h3><p>${t("availableCopies")}</p></div></div>
      <div class="stat-card"><div class="stat-icon gold">📖</div><div class="stat-info"><h3>${s.borrowed}</h3><p>${t("borrowedBooks")}</p></div></div>
      <div class="stat-card"><div class="stat-icon purple">👥</div><div class="stat-info"><h3>${s.members}</h3><p>${t("membersCount")}</p></div></div>
      <div class="stat-card"><div class="stat-icon red">⏰</div><div class="stat-info"><h3>${s.overdue}</h3><p>${t("overdueBooks")}</p></div></div>
      <div class="stat-card"><div class="stat-icon orange">🔄</div><div class="stat-info"><h3>${s.todayBorrows}</h3><p>${t("todayBorrows")}</p></div></div>
    </div>
    <div class="two-col">
      <div class="card">
        <div class="card-head"><h2>${t("movementChart")}</h2></div>
        <div class="card-body"><canvas id="moveChart" height="280"></canvas></div>
      </div>
      <div class="card">
        <div class="card-head"><h2>${t("overdueTitle")}</h2></div>
        <div class="card-body">${renderOverdueBox()}</div>
      </div>
    </div>
    <div class="card">
      <div class="card-head"><h2>${t("lastActivity")}</h2></div>
      <div class="card-body">
        <ul class="activity-list">
          ${
            DB.activities()
              .slice(0, 10)
              .map(
                (a) => `
            <li class="activity-item">
              <span>${a.action}</span>
              <span class="time">${new Date(a.time).toLocaleString(currentLang === "ar" ? "ar-EG" : "en-US")}</span>
            </li>`,
              )
              .join("") || `<li class="activity-item">${t("noActivity")}</li>`
          }
        </ul>
      </div>
    </div>`;
  drawChart();
}

function renderOverdueBox() {
  const overdue = DB.borrows().filter(
    (b) => !b.returned && new Date(b.expectedDate) < new Date(),
  );
  if (!overdue.length)
    return `<div class="empty"><div class="ico">✅</div><p>${t("noOverdue")}</p></div>`;
  return overdue
    .map((b) => {
      const bk = DB.book(b.bookId),
        m = DB.member(b.memberId);
      const days = Math.floor((new Date() - new Date(b.expectedDate)) / 864e5);
      return `<div class="activity-item" style="flex-direction:column;align-items:flex-start;gap:3px">
      <b>${bk?.title || "—"}</b>
      <span style="font-size:12px;color:var(--gray)">${m?.name || "—"} — ${t("lateBy")} ${days}</span>
    </div>`;
    })
    .join("");
}

function drawChart() {
  const cvs = $("#moveChart");
  if (!cvs) return;
  const ctx = cvs.getContext("2d");
  const W = (cvs.width = cvs.offsetWidth),
    H = (cvs.height = 280);
  ctx.clearRect(0, 0, W, H);
  const labels = [],
    bD = [],
    rD = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const s = d.toISOString().split("T")[0];
    labels.push(
      d.toLocaleDateString(currentLang === "ar" ? "ar-EG" : "en-US", {
        weekday: "short",
      }),
    );
    bD.push(DB.borrows().filter((b) => b.borrowDate === s).length);
    rD.push(DB.borrows().filter((b) => b.returnDate === s).length);
  }
  const maxV = Math.max(1, ...bD, ...rD);
  const padL = 40,
    padR = 20,
    padT = 30,
    padB = 40;
  const cW = W - padL - padR,
    cH = H - padT - padB;
  ctx.strokeStyle = "#e1e8ed";
  ctx.lineWidth = 1;
  ctx.font = "12px Cairo";
  ctx.fillStyle = "#6b7a8f";
  ctx.textAlign = "left";
  for (let i = 0; i <= 4; i++) {
    const y = padT + (cH / 4) * i;
    ctx.beginPath();
    ctx.moveTo(padL, y);
    ctx.lineTo(W - padR, y);
    ctx.stroke();
    ctx.fillText(Math.round(maxV - (maxV / 4) * i), 6, y + 4);
  }
  const stepX = cW / (labels.length - 1);
  const pY = (v) => padT + cH - (v / maxV) * cH;
  const pX = (i) => padL + stepX * i;
  function line(data, color) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    data.forEach((v, i) => {
      i === 0 ? ctx.moveTo(pX(i), pY(v)) : ctx.lineTo(pX(i), pY(v));
    });
    ctx.stroke();
    ctx.fillStyle = color;
    data.forEach((v, i) => {
      ctx.beginPath();
      ctx.arc(pX(i), pY(v), 3.5, 0, Math.PI * 2);
      ctx.fill();
    });
  }
  line(bD, "#4a90e2");
  line(rD, "#27ae60");
  ctx.fillStyle = "#6b7a8f";
  ctx.font = "11px Cairo";
  ctx.textAlign = "center";
  labels.forEach((l, i) => ctx.fillText(l, pX(i), H - 12));
  ctx.textAlign = "right";
  ctx.fillStyle = "#4a90e2";
  ctx.fillRect(W - padR - 140, 8, 10, 10);
  ctx.fillStyle = "#1a2332";
  ctx.fillText(t("borrowsLegend"), W - padR - 125, 18);
  ctx.fillStyle = "#27ae60";
  ctx.fillRect(W - padR - 70, 8, 10, 10);
  ctx.fillStyle = "#1a2332";
  ctx.fillText(t("returnsLegend"), W - padR - 55, 18);
}

/* ================== Books ================== */
function renderBooks() {
  $("#content").innerHTML = `
    <div class="card">
      <div class="card-head">
        <h2>${t("booksList")}</h2>
        <div style="display:flex;gap:10px;flex-wrap:wrap">
          <div class="search-box"><input id="booksSearch" placeholder="${t("searchBooks")}" oninput="filterBooks()"></div>
          ${canEdit() ? `<button class="btn btn-gold" onclick="bookForm()">${t("addBook")}</button>` : ""}
        </div>
      </div>
      <div class="card-body">
        <div class="table-wrap">
          <table>
            <thead><tr>
              <th>#</th><th>${t("title")}</th><th>${t("author")}</th><th>${t("category")}</th>
              <th>ISBN</th><th>${t("copies")}</th><th>${t("available")}</th><th>${t("location")}</th><th>${t("actions")}</th>
            </tr></thead>
            <tbody id="booksBody"></tbody>
          </table>
        </div>
      </div>
    </div>`;
  filterBooks();
}

function filterBooks() {
  const q = ($("#booksSearch").value || "").trim().toLowerCase();
  const list = DB.books().filter(
    (b) =>
      !q ||
      b.title.toLowerCase().includes(q) ||
      b.author.toLowerCase().includes(q) ||
      (b.isbn || "").toLowerCase().includes(q),
  );
  const tb = $("#booksBody");
  if (!list.length) {
    tb.innerHTML = `<tr><td colspan="9"><div class="empty"><div class="ico">📭</div><p>${t("noBooks")}</p></div></td></tr>`;
    return;
  }
  tb.innerHTML = list
    .map((b) => {
      const cat = DB.cat(b.categoryId);
      const av = b.available > 0 ? "badge-success" : "badge-danger";
      return `<tr>
      <td>${b.id}</td><td><b>${b.title}</b></td><td>${b.author}</td>
      <td>${cat?.name || "-"}</td><td>${b.isbn || "-"}</td><td>${b.copies}</td>
      <td><span class="badge ${av}">${b.available}</span></td>
      <td>${b.location || "-"}</td>
      <td style="white-space:nowrap">
        ${
          canEdit()
            ? `
          <button class="btn btn-sm btn-warn" onclick="bookForm(${b.id})">✏️</button>
          <button class="btn btn-sm btn-danger" onclick="removeBook(${b.id})">🗑️</button>`
            : `<span class="badge badge-gray">${t("view")}</span>`
        }
      </td></tr>`;
    })
    .join("");
}

function bookForm(id) {
  const b = id ? DB.book(id) : null;
  const cats = DB.cats();
  openModal(`
    <div class="modal-head">
      <h3>${b ? t("editBookTitle") : t("addBookTitle")}</h3>
      <button class="modal-close" onclick="closeModal()">&times;</button>
    </div>
    <div class="modal-body">
      <div class="row-2">
        <div class="form-group"><label>${t("bookTitle")} *</label><input id="f_title" value="${b?.title || ""}"></div>
        <div class="form-group"><label>${t("author")} *</label><input id="f_author" value="${b?.author || ""}"></div>
      </div>
      <div class="row-2">
        <div class="form-group"><label>${t("publisher")}</label><input id="f_pub" value="${b?.publisher || ""}"></div>
        <div class="form-group"><label>ISBN</label><input id="f_isbn" value="${b?.isbn || ""}"></div>
      </div>
      <div class="row-2">
        <div class="form-group"><label>${t("category")} *</label>
          <select id="f_cat"><option value="">--</option>
            ${cats.map((c) => `<option value="${c.id}" ${b?.categoryId == c.id ? "selected" : ""}>${c.name}</option>`).join("")}
          </select></div>
        <div class="form-group"><label>${t("publishDate")}</label><input type="date" id="f_date" value="${b?.publishDate || ""}"></div>
      </div>
      <div class="row-2">
        <div class="form-group"><label>${t("copiesCount")} *</label><input type="number" min="1" id="f_copies" value="${b?.copies || 1}"></div>
        <div class="form-group"><label>${t("location")}</label><input id="f_loc" value="${b?.location || ""}"></div>
      </div>
      <div class="form-group"><label>${t("description")}</label><textarea id="f_desc">${b?.description || ""}</textarea></div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-primary" onclick="saveBook(${b ? b.id : "null"})">💾 ${t("save")}</button>
      <button class="btn btn-danger" onclick="closeModal()">${t("cancel")}</button>
    </div>`);
}

function saveBook(id) {
  const data = {
    title: $("#f_title").value.trim(),
    author: $("#f_author").value.trim(),
    publisher: $("#f_pub").value.trim(),
    isbn: $("#f_isbn").value.trim(),
    categoryId: +$("#f_cat").value,
    publishDate: $("#f_date").value,
    copies: +$("#f_copies").value,
    location: $("#f_loc").value.trim(),
    description: $("#f_desc").value.trim(),
  };
  if (!data.title || !data.author || !data.categoryId || !data.copies) {
    toast(t("requiredFields"), "error");
    return;
  }
  if (id) {
    DB.updateBook(id, data);
    toast(t("bookUpdated"));
  } else {
    DB.addBook(data);
    toast(t("bookAdded"));
  }
  closeModal();
  filterBooks();
}

function removeBook(id) {
  if (!confirm(t("confirmDeleteBook"))) return;
  const r = DB.deleteBook(id);
  if (r.error) toast(r.error, "error");
  else {
    toast(t("bookDeleted"));
    filterBooks();
  }
}

/* ================== Members ================== */
function renderMembers() {
  $("#content").innerHTML = `
    <div class="card">
      <div class="card-head">
        <h2>${t("membersList")}</h2>
        <div style="display:flex;gap:10px;flex-wrap:wrap">
          <div class="search-box"><input id="membersSearch" placeholder="${t("searchMembers")}" oninput="filterMembers()"></div>
          ${canEdit() ? `<button class="btn btn-gold" onclick="memberForm()">${t("addMember")}</button>` : ""}
        </div>
      </div>
      <div class="card-body">
        <div class="table-wrap">
          <table>
            <thead><tr>
              <th>#</th><th>${t("fullName")}</th><th>${t("phone")}</th><th>${t("email")}</th>
              <th>${t("address")}</th><th>${t("joinDate")}</th><th>${t("status")}</th><th>${t("actions")}</th>
            </tr></thead>
            <tbody id="membersBody"></tbody>
          </table>
        </div>
      </div>
    </div>`;
  filterMembers();
}

function filterMembers() {
  const q = ($("#membersSearch").value || "").trim().toLowerCase();
  const list = DB.members().filter(
    (m) =>
      !q ||
      m.name.toLowerCase().includes(q) ||
      (m.phone || "").includes(q) ||
      String(m.id) === q,
  );
  const tb = $("#membersBody");
  if (!list.length) {
    tb.innerHTML = `<tr><td colspan="8"><div class="empty"><div class="ico">👥</div><p>${t("noMembers")}</p></div></td></tr>`;
    return;
  }
  tb.innerHTML = list
    .map(
      (m) => `
    <tr>
      <td>${m.id}</td><td><b>${m.name}</b></td><td>${m.phone || "-"}</td><td>${m.email || "-"}</td>
      <td>${m.address || "-"}</td><td>${fmtDate(m.joinDate)}</td>
      <td><span class="badge ${m.status === "active" ? "badge-success" : "badge-gray"}">${m.status === "active" ? t("active") : t("inactive")}</span></td>
      <td style="white-space:nowrap">
        ${
          canEdit()
            ? `
          <button class="btn btn-sm btn-warn" onclick="memberForm(${m.id})">✏️</button>
          <button class="btn btn-sm btn-danger" onclick="removeMember(${m.id})">🗑️</button>`
            : `<span class="badge badge-gray">${t("view")}</span>`
        }
      </td></tr>`,
    )
    .join("");
}

function memberForm(id) {
  const m = id ? DB.member(id) : null;
  openModal(`
    <div class="modal-head">
      <h3>${m ? t("editMemberTitle") : t("addMemberTitle")}</h3>
      <button class="modal-close" onclick="closeModal()">&times;</button>
    </div>
    <div class="modal-body">
      <div class="form-group"><label>${t("fullName")} *</label><input id="m_name" value="${m?.name || ""}"></div>
      <div class="row-2">
        <div class="form-group"><label>${t("phone")} *</label><input id="m_phone" value="${m?.phone || ""}"></div>
        <div class="form-group"><label>${t("email")}</label><input type="email" id="m_email" value="${m?.email || ""}"></div>
      </div>
      <div class="form-group"><label>${t("address")}</label><input id="m_addr" value="${m?.address || ""}"></div>
      ${
        m
          ? `<div class="form-group"><label>${t("status")}</label>
        <select id="m_status">
          <option value="active" ${m.status === "active" ? "selected" : ""}>${t("active")}</option>
          <option value="inactive" ${m.status === "inactive" ? "selected" : ""}>${t("inactive")}</option>
        </select></div>`
          : ""
      }
    </div>
    <div class="modal-foot">
      <button class="btn btn-primary" onclick="saveMember(${m ? m.id : "null"})">💾 ${t("save")}</button>
      <button class="btn btn-danger" onclick="closeModal()">${t("cancel")}</button>
    </div>`);
}

function saveMember(id) {
  const data = {
    name: $("#m_name").value.trim(),
    phone: $("#m_phone").value.trim(),
    email: $("#m_email").value.trim(),
    address: $("#m_addr").value.trim(),
  };
  if (id) data.status = $("#m_status").value;
  if (!data.name || !data.phone) {
    toast(t("requiredFields"), "error");
    return;
  }
  if (id) {
    DB.updateMember(id, data);
    toast(t("memberUpdated"));
  } else {
    DB.addMember(data);
    toast(t("memberAdded"));
  }
  closeModal();
  filterMembers();
}

function removeMember(id) {
  if (!confirm(t("confirmDeleteMember"))) return;
  const r = DB.deleteMember(id);
  if (r.error) toast(r.error, "error");
  else {
    toast(t("bookDeleted"));
    filterMembers();
  }
}

/* ================== Borrow ================== */
function renderBorrow() {
  $("#content").innerHTML = `
    <div class="card">
      <div class="card-head"><h2>${t("borrowNew")}</h2></div>
      <div class="card-body">
        <div class="row-2">
          <div class="form-group"><label>${t("member")} *</label><select id="b_member"></select></div>
          <div class="form-group"><label>${t("book")} *</label><select id="b_book"></select></div>
        </div>
        <div class="row-2">
          <div class="form-group"><label>${t("expectedReturn")} *</label><input type="date" id="b_exp"></div>
          <div class="form-group" style="display:flex;align-items:flex-end">
            <button class="btn btn-success btn-block" onclick="doBorrow()">${t("registerBorrow")}</button>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-head"><h2>${t("activeBorrows")}</h2></div>
      <div class="card-body">
        <div class="table-wrap">
          <table>
            <thead><tr>
              <th>#</th><th>${t("member")}</th><th>${t("book")}</th>
              <th>${t("borrowDate")}</th><th>${t("expectedReturn")}</th>
              <th>${t("status")}</th><th>${t("actions")}</th>
            </tr></thead>
            <tbody id="activeBorrows"></tbody>
          </table>
        </div>
      </div>
    </div>`;
  loadBorrowSelects();
  renderActiveBorrows();
}

function loadBorrowSelects() {
  const members = DB.members().filter((m) => m.status === "active");
  const books = DB.books().filter((b) => b.available > 0);
  $("#b_member").innerHTML =
    `<option value="">${t("selectMember")}</option>` +
    members
      .map((m) => `<option value="${m.id}">${m.name} (${m.phone})</option>`)
      .join("");
  $("#b_book").innerHTML =
    `<option value="">${t("selectBook")}</option>` +
    books
      .map(
        (b) =>
          `<option value="${b.id}">${b.title} — ${t("availableWord")} ${b.available}</option>`,
      )
      .join("");
  const s = DB.settings();
  const d = new Date();
  d.setDate(d.getDate() + s.maxDays);
  $("#b_exp").value = d.toISOString().split("T")[0];
}

function renderActiveBorrows() {
  const active = DB.borrows().filter((b) => !b.returned);
  const tb = $("#activeBorrows");
  if (!active.length) {
    tb.innerHTML = `<tr><td colspan="7"><div class="empty"><div class="ico">✅</div><p>${t("noActiveBorrows")}</p></div></td></tr>`;
    return;
  }
  tb.innerHTML = active
    .map((b) => {
      const bk = DB.book(b.bookId),
        m = DB.member(b.memberId);
      const isLate = new Date(b.expectedDate) < new Date();
      return `<tr>
      <td>${b.id}</td><td>${m?.name || "-"}</td><td>${bk?.title || "-"}</td>
      <td>${fmtDate(b.borrowDate)}</td><td>${fmtDate(b.expectedDate)}</td>
      <td>${isLate ? `<span class="badge badge-danger">${t("late")}</span>` : `<span class="badge badge-success">${t("onTime")}</span>`}</td>
      <td>${canEdit() ? `<button class="btn btn-sm btn-success" onclick="doReturn(${b.id})">${t("returnBtn")}</button>` : "-"}</td>
    </tr>`;
    })
    .join("");
}

function doBorrow() {
  const mid = $("#b_member").value,
    bid = $("#b_book").value,
    exp = $("#b_exp").value;
  if (!mid || !bid || !exp) {
    toast(t("fillFields"), "error");
    return;
  }
  const r = DB.borrow(mid, bid, exp);
  if (r.error) {
    toast(r.error, "error");
    return;
  }
  toast(t("borrowSuccess"));
  loadBorrowSelects();
  renderActiveBorrows();
  updateNotif();
}

function doReturn(id) {
  if (!confirm(t("confirmReturn"))) return;
  const r = DB.returnBook(id);
  if (r.error) {
    toast(r.error, "error");
    return;
  }
  const msg =
    r.borrow.fine > 0
      ? `${t("returnWithFine")} ${r.borrow.fine}`
      : t("returnSuccess");
  toast(msg, r.borrow.fine > 0 ? "warn" : "success");
  renderActiveBorrows();
  updateNotif();
}

/* ================== Returns ================== */
function renderReturns() {
  const all = DB.borrows().slice().reverse();
  $("#content").innerHTML = `
    <div class="card">
      <div class="card-head"><h2>${t("returnsLog")}</h2></div>
      <div class="card-body">
        <div class="table-wrap">
          <table>
            <thead><tr>
              <th>#</th><th>${t("member")}</th><th>${t("book")}</th>
              <th>${t("borrowDate")}</th><th>${t("expectedReturn")}</th>
              <th>${t("returnDate")}</th><th>${t("lateDays")}</th><th>${t("fine")}</th><th>${t("status")}</th>
            </tr></thead>
            <tbody>
              ${
                !all.length
                  ? `<tr><td colspan="9"><div class="empty"><div class="ico">📭</div><p>${t("noRecords")}</p></div></td></tr>`
                  : all
                      .map((b) => {
                        const bk = DB.book(b.bookId),
                          m = DB.member(b.memberId);
                        return `<tr>
                  <td>${b.id}</td><td>${m?.name || "-"}</td><td>${bk?.title || "-"}</td>
                  <td>${fmtDate(b.borrowDate)}</td><td>${fmtDate(b.expectedDate)}</td>
                  <td>${b.returned ? fmtDate(b.returnDate) : "—"}</td>
                  <td>${b.lateDays > 0 ? b.lateDays : "—"}</td>
                  <td>${b.fine > 0 ? `<span class="badge badge-warn">${b.fine}</span>` : "—"}</td>
                  <td>${b.returned ? `<span class="badge badge-info">${t("returned")}</span>` : `<span class="badge badge-warn">${t("activeStatus")}</span>`}</td>
                </tr>`;
                      })
                      .join("")
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>`;
}

/* ================== Categories ================== */
function renderCategories() {
  const cats = DB.cats();
  $("#content").innerHTML = `
    <div class="card">
      <div class="card-head">
        <h2>${t("categoriesList")}</h2>
        ${canEdit() ? `<button class="btn btn-gold" onclick="catForm()">${t("addCategory")}</button>` : ""}
      </div>
      <div class="card-body">
        <div class="table-wrap">
          <table>
            <thead><tr><th>#</th><th>${t("catName")}</th><th>${t("booksCount")}</th><th>${t("actions")}</th></tr></thead>
            <tbody>
              ${
                !cats.length
                  ? `<tr><td colspan="4"><div class="empty"><p>${t("noCategories")}</p></div></td></tr>`
                  : cats
                      .map((c) => {
                        const count = DB.books().filter(
                          (b) => b.categoryId == c.id,
                        ).length;
                        return `<tr>
                  <td>${c.id}</td><td><b>${c.name}</b></td>
                  <td><span class="badge badge-info">${count}</span></td>
                  <td style="white-space:nowrap">
                    ${
                      canEdit()
                        ? `
                      <button class="btn btn-sm btn-warn" onclick="catForm(${c.id})">✏️</button>
                      <button class="btn btn-sm btn-danger" onclick="removeCat(${c.id})">🗑️</button>`
                        : `<span class="badge badge-gray">${t("view")}</span>`
                    }
                  </td></tr>`;
                      })
                      .join("")
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>`;
}

function catForm(id) {
  const c = id ? DB.cat(id) : null;
  openModal(`
    <div class="modal-head">
      <h3>${c ? t("editCatTitle") : t("addCatTitle")}</h3>
      <button class="modal-close" onclick="closeModal()">&times;</button>
    </div>
    <div class="modal-body">
      <div class="form-group"><label>${t("catName")} *</label><input id="c_name" value="${c?.name || ""}"></div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-primary" onclick="saveCat(${c ? c.id : "null"})">💾 ${t("save")}</button>
      <button class="btn btn-danger" onclick="closeModal()">${t("cancel")}</button>
    </div>`);
}

function saveCat(id) {
  const name = $("#c_name").value.trim();
  if (!name) {
    toast(t("enterCatName"), "error");
    return;
  }
  if (id) DB.updateCat(id, name);
  else DB.addCat(name);
  toast(t("saved"));
  closeModal();
  renderCategories();
}

function removeCat(id) {
  if (!confirm(t("confirmDeleteCat"))) return;
  const r = DB.deleteCat(id);
  if (r.error) toast(r.error, "error");
  else {
    toast(t("bookDeleted"));
    renderCategories();
  }
}

/* ================== Reports ================== */
function renderReports() {
  $("#content").innerHTML = `
    <div class="card">
      <div class="card-head"><h2>${t("reportsTitle")}</h2></div>
      <div class="card-body">
        <div class="row-2">
          <div class="form-group"><label>${t("fromDate")}</label><input type="date" id="rep_from"></div>
          <div class="form-group"><label>${t("toDate")}</label><input type="date" id="rep_to"></div>
        </div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:10px">
          <button class="btn btn-gold" onclick="runReport('all_books')">${t("allBooksReport")}</button>
          <button class="btn btn-gold" onclick="runReport('borrowed')">${t("borrowedReport")}</button>
          <button class="btn btn-gold" onclick="runReport('available')">${t("availableReport")}</button>
          <button class="btn btn-gold" onclick="runReport('overdue')">${t("overdueReport")}</button>
          <button class="btn btn-gold" onclick="runReport('top_books')">${t("topBooksReport")}</button>
          <button class="btn btn-gold" onclick="runReport('top_members')">${t("topMembersReport")}</button>
          <button class="btn btn-gold" onclick="runReport('movement')">${t("movementReport")}</button>
        </div>
      </div>
    </div>
    <div id="reportResult"></div>`;
  const now = new Date();
  $("#rep_to").value = now.toISOString().split("T")[0];
  const f = new Date();
  f.setDate(f.getDate() - 30);
  $("#rep_from").value = f.toISOString().split("T")[0];
}

function runReport(type) {
  const from = $("#rep_from").value,
    to = $("#rep_to").value;
  let html = "";
  if (type === "all_books") {
    const books = DB.books();
    html =
      `<h3 style="margin-bottom:15px">${t("allBooksReport")} (${books.length})</h3>` +
      simpleTable(
        ["#", t("title"), t("author"), t("copies"), t("available")],
        books.map((b) => [b.id, b.title, b.author, b.copies, b.available]),
      );
  } else if (type === "borrowed") {
    const list = DB.borrows().filter((b) => !b.returned);
    html =
      `<h3 style="margin-bottom:15px">${t("borrowedReport")} (${list.length})</h3>` +
      simpleTable(
        ["#", t("member"), t("book"), t("borrowDate"), t("expectedReturn")],
        list.map((b) => [
          b.id,
          DB.member(b.memberId)?.name || "—",
          DB.book(b.bookId)?.title || "—",
          fmtDate(b.borrowDate),
          fmtDate(b.expectedDate),
        ]),
      );
  } else if (type === "available") {
    const list = DB.books().filter((b) => b.available > 0);
    html =
      `<h3 style="margin-bottom:15px">${t("availableReport")} (${list.length})</h3>` +
      simpleTable(
        ["#", t("title"), t("author"), t("available")],
        list.map((b) => [b.id, b.title, b.author, b.available]),
      );
  } else if (type === "overdue") {
    const list = DB.borrows().filter(
      (b) => !b.returned && new Date(b.expectedDate) < new Date(),
    );
    html =
      `<h3 style="margin-bottom:15px">${t("overdueReport")} (${list.length})</h3>` +
      simpleTable(
        ["#", t("member"), t("book"), t("expectedReturn"), t("lateDays")],
        list.map((b) => {
          const days = Math.floor(
            (new Date() - new Date(b.expectedDate)) / 864e5,
          );
          return [
            b.id,
            DB.member(b.memberId)?.name || "—",
            DB.book(b.bookId)?.title || "—",
            fmtDate(b.expectedDate),
            days,
          ];
        }),
      );
  } else if (type === "top_books") {
    const counts = {};
    DB.borrows().forEach(
      (b) => (counts[b.bookId] = (counts[b.bookId] || 0) + 1),
    );
    const arr = Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 15);
    html =
      `<h3 style="margin-bottom:15px">${t("topBooksReport")}</h3>` +
      simpleTable(
        ["#", t("title"), t("author"), t("timesBorrowed")],
        arr.map(([id, c]) => {
          const bk = DB.book(id);
          return [
            bk ? bk.id : id,
            bk ? bk.title : "—",
            bk ? bk.author : "—",
            c,
          ];
        }),
      );
  } else if (type === "top_members") {
    const counts = {};
    DB.borrows().forEach(
      (b) => (counts[b.memberId] = (counts[b.memberId] || 0) + 1),
    );
    const arr = Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 15);
    html =
      `<h3 style="margin-bottom:15px">${t("topMembersReport")}</h3>` +
      simpleTable(
        ["#", t("member"), t("phone"), t("timesBorrowed")],
        arr.map(([id, c]) => {
          const m = DB.member(id);
          return [m ? m.id : id, m ? m.name : "—", m?.phone || "—", c];
        }),
      );
  } else if (type === "movement") {
    const list = DB.borrows().filter(
      (b) => !from || !to || (b.borrowDate >= from && b.borrowDate <= to),
    );
    html =
      `<h3 style="margin-bottom:15px">${t("movementReport")} (${from} → ${to}) — ${list.length}</h3>` +
      simpleTable(
        [
          "#",
          t("member"),
          t("book"),
          t("borrowDate"),
          t("returnDate"),
          t("status"),
        ],
        list.map((b) => [
          b.id,
          DB.member(b.memberId)?.name || "—",
          DB.book(b.bookId)?.title || "—",
          fmtDate(b.borrowDate),
          b.returned ? fmtDate(b.returnDate) : "—",
          b.returned ? t("returned") : t("activeStatus"),
        ]),
      );
  }
  $("#reportResult").innerHTML = `
    <div class="card">
      <div class="card-head">
        <h2>${t("reportResult")}</h2>
        <button class="btn btn-primary" onclick="window.print()">${t("print")}</button>
      </div>
      <div class="card-body">${html}</div>
    </div>`;
}

function simpleTable(headers, rows) {
  if (!rows.length) return `<div class="empty"><p>${t("noData")}</p></div>`;
  return `<div class="table-wrap"><table>
    <thead><tr>${headers.map((h) => `<th>${h}</th>`).join("")}</tr></thead>
    <tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody>
  </table></div>`;
}

/* ================== Users ================== */
function renderUsers() {
  if (!isAdmin()) {
    toast(t("notAuthorized"), "error");
    navigate("dashboard");
    return;
  }
  const users = DB.get("users");
  $("#content").innerHTML = `
    <div class="card">
      <div class="card-head">
        <h2>${t("usersList")}</h2>
        <button class="btn btn-gold" onclick="userForm()">${t("addUser")}</button>
      </div>
      <div class="card-body">
        <div class="table-wrap">
          <table>
            <thead><tr><th>#</th><th>${t("fullName")}</th><th>${t("usernameCol")}</th><th>${t("role")}</th><th>${t("actions")}</th></tr></thead>
            <tbody>
              ${users
                .map(
                  (u) => `
                <tr>
                  <td>${u.id}</td><td><b>${u.name}</b></td><td>${u.username}</td>
                  <td><span class="badge ${u.role === "admin" ? "badge-danger" : u.role === "librarian" ? "badge-warn" : "badge-info"}">${t(u.role)}</span></td>
                  <td style="white-space:nowrap">
                    <button class="btn btn-sm btn-warn" onclick="userForm(${u.id})">✏️</button>
                    ${u.id !== 1 ? `<button class="btn btn-sm btn-danger" onclick="removeUser(${u.id})">🗑️</button>` : ""}
                  </td>
                </tr>`,
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>`;
}

function userForm(id) {
  const u = id ? DB.get("users").find((x) => x.id == id) : null;
  openModal(`
    <div class="modal-head">
      <h3>${u ? t("editUserTitle") : t("addUserTitle")}</h3>
      <button class="modal-close" onclick="closeModal()">&times;</button>
    </div>
    <div class="modal-body">
      <div class="form-group"><label>${t("fullName")} *</label><input id="u_name" value="${u?.name || ""}"></div>
      <div class="row-2">
        <div class="form-group"><label>${t("usernameCol")} *</label><input id="u_user" value="${u?.username || ""}"></div>
        <div class="form-group"><label>${t("newPassword")}</label><input id="u_pass" value=""></div>
      </div>
      <div class="form-group"><label>${t("role")}</label>
        <select id="u_role">
          <option value="admin" ${u?.role === "admin" ? "selected" : ""}>${t("admin")}</option>
          <option value="librarian" ${u?.role === "librarian" ? "selected" : ""}>${t("librarian")}</option>
          <option value="viewer" ${u?.role === "viewer" ? "selected" : ""}>${t("viewer")}</option>
        </select></div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-primary" onclick="saveUser(${u ? u.id : "null"})">💾 ${t("save")}</button>
      <button class="btn btn-danger" onclick="closeModal()">${t("cancel")}</button>
    </div>`);
}

function saveUser(id) {
  const users = DB.get("users");
  const name = $("#u_name").value.trim(),
    uname = $("#u_user").value.trim();
  const pass = $("#u_pass").value,
    role = $("#u_role").value;
  if (!name || !uname) {
    toast(t("requiredFields"), "error");
    return;
  }
  if (!id && !pass) {
    toast(t("passwordRequired"), "error");
    return;
  }
  if (id) {
    const i = users.findIndex((x) => x.id == id);
    if (i > -1) {
      users[i].name = name;
      users[i].username = uname;
      users[i].role = role;
      if (pass) users[i].password = pass;
    }
  } else {
    users.push({
      id: DB.nextId("users"),
      username: uname,
      password: pass,
      name,
      role,
    });
  }
  DB.set("users", users);
  toast(t("saved"));
  closeModal();
  renderUsers();
}

function removeUser(id) {
  if (!confirm(t("confirmDeleteUser"))) return;
  DB.set(
    "users",
    DB.get("users").filter((u) => u.id != id),
  );
  toast(t("bookDeleted"));
  renderUsers();
}

/* ================== Settings ================== */
function renderSettings() {
  if (!isAdmin()) {
    toast(t("notAuthorized"), "error");
    navigate("dashboard");
    return;
  }
  const s = DB.settings();
  $("#content").innerHTML = `
    <div class="card">
      <div class="card-head"><h2>${t("settingsTitle")}</h2></div>
      <div class="card-body">
        <div class="form-group"><label>${t("libraryName")}</label><input id="s_name" value="${s.libraryName}"></div>
        <div class="row-2">
          <div class="form-group"><label>${t("finePerDay")}</label><input type="number" id="s_fine" value="${s.finePerDay}"></div>
          <div class="form-group"><label>${t("borrowDays")}</label><input type="number" id="s_days" value="${s.maxDays}"></div>
        </div>
        <div class="form-group"><label>${t("maxBorrows")}</label><input type="number" id="s_max" value="${s.maxBorrows}"></div>
        <button class="btn btn-primary" onclick="saveSettings()">${t("saveSettings")}</button>
        <hr style="margin:20px 0;border:none;border-top:1px solid #eee">
        <h3 style="margin-bottom:10px;font-size:15px">${t("dangerZone")}</h3>
        <button class="btn btn-danger" onclick="resetAll()">${t("resetAll")}</button>
      </div>
    </div>`;
}

function saveSettings() {
  DB.saveSettings({
    libraryName: $("#s_name").value.trim() || "Library",
    finePerDay: +$("#s_fine").value,
    maxDays: +$("#s_days").value,
    maxBorrows: +$("#s_max").value,
  });
  $("#brandName").textContent = DB.settings().libraryName;
  toast(t("settingsSaved"));
}

function resetAll() {
  if (!confirm(t("confirmReset1"))) return;
  if (!confirm(t("confirmReset2"))) return;
  localStorage.clear();
  sessionStorage.clear();
  location.reload();
}

/* ================== Boot ================== */
DB.init();
if (sessionStorage.user) {
  startApp();
} else {
  $("#loginScreen").style.display = "flex";
  $("#appScreen").style.display = "none";
  applyLang();
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && $("#loginScreen").style.display !== "none")
    doLogin();
});
