initSidebarItems({"enum":[["AliasTy",""],["ClausePriority",""],["Constraint","A constraint on lifetimes."],["DomainGoal","A \"domain goal\" is a goal that is directly about Rust, rather than a pure logical statement. As much as possible, the Chalk solver should avoid decomposing this enum, and instead treat its values opaquely."],["FloatTy",""],["FromEnv",""],["GoalData","A general goal; this is the full range of questions you can pose to Chalk."],["IntTy",""],["LifetimeData",""],["Mutability",""],["ParameterKind",""],["ProgramClauseData",""],["QuantifierKind",""],["Scalar",""],["TyData",""],["TypeName",""],["UintTy",""],["Void",""],["WellFormed",""],["WhereClause","Where clauses that can be written by a Rust programmer."]],"macro":[["const_visit",""],["copy_fold",""],["id_fold",""],["id_visit",""]],"mod":[["cast",""],["could_match",""],["debug",""],["fold","Traits for transforming bits of IR."],["interner",""],["visit","Traits for visiting bits of IR."],["zip",""]],"struct":[["AliasEq","Proves equality between an alias and a type."],["AnswerSubst",""],["ApplicationTy",""],["AssocTypeId","The id for the associated type member of a trait. The details of the type can be found by invoking the [`associated_ty_data`] method."],["Binders","Indicates that the `value` is universally quantified over `N` parameters of the given kinds, where `N == self.binders.len()`. A variable with depth `i < N` refers to the value at `self.binders[i]`. Variables with depth `>= N` are free."],["BindersIntoIterator",""],["BoundVar","Identifies a particular bound variable within a binder. Variables are identified by the combination of a [`DebruijnIndex`], which identifies the binder, and an index within that binder."],["Canonical","Wraps a \"canonicalized item\". Items are canonicalized as follows:"],["CanonicalVarKinds",""],["ClauseId",""],["ConstrainedSubst","Combines a substitution (`subst`) with a set of region constraints (`constraints`). This represents the result of a query; the substitution stores the values for the query's unknown variables, and the constraints represents any region constraints that must additionally be solved."],["DebruijnIndex","References the binder at the given depth. The index is a [de Bruijn index], so it counts back through the in-scope binders, with 0 being the innermost binder. This is used in impls and the like. For example, if we had a rule like `for<T> { (T: Clone) :- (T: Copy) }`, then `T` would be represented as a `BoundVar(0)` (as the `for` is the innermost binder)."],["DynTy","A \"DynTy\" could be either a `dyn Trait` or an (opaque) `impl Trait`. Both of them are conceptually very related to a \"existential type\" of the form `exists<T> { T: Trait }`. The `DynTy` type represents those bounds."],["Environment","The set of assumptions we've made so far, and the current number of universal (forall) quantifiers we're within."],["EqGoal",""],["Fn","for<'a...'z> X -- all binders are instantiated at once, and we use deBruijn indices within `self.ty`"],["Goal","A general goal; this is the full range of questions you can pose to Chalk."],["Goals","A list of goals."],["ImplId",""],["InEnvironment",""],["InferenceVar",""],["Lifetime",""],["Normalize","Proves that the given type alias normalizes to the given type. A projection `T::Foo` normalizes to the type `U` if we can match it to an impl and that impl has a `type Foo = V` where `U = V`."],["OpaqueTy",""],["OpaqueTyId",""],["Parameter",""],["ParameterKinds",""],["PlaceholderIndex","Index of an universally quantified parameter in the environment. Two indexes are required, the one of the universe itself and the relative index inside the universe."],["ProgramClause",""],["ProgramClauseImplication","Represents one clause of the form `consequence :- conditions` where `conditions = cond_1 && cond_2 && ...` is the conjunction of the individual conditions."],["ProgramClauses",""],["ProjectionTy",""],["QuantifiedWhereClauses",""],["StructId",""],["SubstFolder",""],["Substitution","A mapping of inference variables to instantiations thereof."],["TraitId","The id of a trait definition; could be used to load the trait datum by invoking the [`trait_datum`] method."],["TraitRef",""],["Ty",""],["UCanonical","A \"universe canonical\" value. This is a wrapper around a `Canonical`, indicating that the universes within have been \"renumbered\" to start from 0 and collapse unimportant distinctions."],["UniverseIndex","An universe index is how a universally quantified parameter is represented when it's binder is moved into the environment. An example chain of transformations would be: `forall<T> { Goal(T) }` (syntactical representation) `forall { Goal(?0) }` (used a DeBruijn index) `Goal(!U1)` (the quantifier was moved to the environment and replaced with a universe index) See https://rustc-dev-guide.rust-lang.org/borrow_check/region_inference.html#placeholders-and-universes for more."]],"trait":[["AsParameters",""],["ToParameter",""]],"type":[["ParameterData",""],["QuantifiedWhereClause",""]]});